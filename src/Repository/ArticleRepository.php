<?php

namespace App\Repository;

use App\Entity\Article;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }

    /**
     * Récupère les articles pour DataTables avec pagination, recherche et tri.
     */
    public function findForDataTable(int $start, int $length, ?string $search, string $orderColumn, string $orderDir): array
    {
        $qb = $this->createQueryBuilder('a')
            ->leftJoin('a.categories', 'c')
            ->leftJoin('a.comments', 'com')
            ->leftJoin('a.likes', 'l')
            ->groupBy('a.id');

        // Appliquer la recherche si elle existe
        if ($search) {
            $qb->andWhere('a.title LIKE :search OR c.title LIKE :search')
               ->setParameter('search', '%' . $search . '%');
        }

        // Compter le nombre total d'articles
        $totalCount = $this->createQueryBuilder('a')
            ->select('COUNT(a.id)')
            ->getQuery()
            ->getSingleScalarResult();

        // Compter le nombre d'articles filtrés
        $filteredCountQb = clone $qb;
        $filteredCount = $filteredCountQb
            ->select('COUNT(DISTINCT a.id)')
            ->getQuery()
            ->getSingleScalarResult();

        // Appliquer le tri
        if ($orderColumn === 'commentsCount') {
            $qb->addSelect('COUNT(com.id) as HIDDEN commentsCount')
               ->orderBy('commentsCount', $orderDir);
        } elseif ($orderColumn === 'likesCount') {
            $qb->addSelect('COUNT(l.id) as HIDDEN likesCount')
               ->orderBy('likesCount', $orderDir);
        } elseif ($orderColumn === 'categories') {
            $qb->orderBy('c.title', $orderDir);
        } else {
            $qb->orderBy($orderColumn, $orderDir);
        }

        // Appliquer la pagination
        $qb->setFirstResult($start)
           ->setMaxResults($length);

        return [
            'data' => $qb->getQuery()->getResult(),
            'totalCount' => $totalCount,
            'filteredCount' => $filteredCount,
        ];
    }

    /**
     * Recherche des articles par titre (pour les sélections dynamiques/autocomplétions).
     */
    public function searchByTitle(string $query, int $limit = 10): array
    {
        return $this->createQueryBuilder('a')
            ->leftJoin('a.categories', 'c')
            ->addSelect('c')
            ->where('a.title LIKE :query')
            ->setParameter('query', '%' . $query . '%')
            ->orderBy('a.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
