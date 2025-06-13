<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    #[Route('/api/search', name: 'api_search')]
    public function search(Request $request, ArticleRepository $articleRepo, CategoryRepository $categoryRepo): JsonResponse
    {
        $query = $request->query->get('q');

        if (!$query || strlen($query) < 2) {
            return new JsonResponse(['articles' => [], 'categories' => []]);
        }

        $articles = $articleRepo->createQueryBuilder('a')
            ->leftJoin('a.categories', 'c')
            ->addSelect('c')
            ->where('a.title LIKE :q')
            ->setParameter('q', '%' . $query . '%')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        $categories = $categoryRepo->createQueryBuilder('c')
            ->where('c.title LIKE :q OR c.description LIKE :q')
            ->setParameter('q', '%' . $query . '%')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        return $this->json([
            'articles' => array_map(fn($a) => [
                'id' => $a->getId(),
                'title' => $a->getTitle(),
                'categories' => array_map(fn($c) => $c->getTitle(), $a->getCategories()->toArray())
            ], $articles),
            'categories' => array_map(fn($c) => [
                'id' => $c->getId(),
                'title' => $c->getTitle(),
                'description' => $c->getDescription()
            ], $categories)
        ]);
    }
}
