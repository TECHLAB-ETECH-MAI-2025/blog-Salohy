<?php

namespace App\Controller\Api;

use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\ArticleLike;
use App\Form\CommentType;
use App\Repository\ArticleLikeRepository;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api')]
class ArticleController extends AbstractController
{
    #[Route('/articles', name: 'api_articles', methods: ['POST'])]
    public function list(Request $request, ArticleRepository $articleRepository): JsonResponse
    {
        $draw = $request->getInt('draw');
        $start = $request->request->getInt('start');
        $length = $request->request->getInt('length');
        $search = $request->request->all('search')['value'] ?? null;
        $orders = $request->request->all('order') ?? [];

        $columns = [
            0 => 'a.id',
            1 => 'a.title',
            2 => 'categories',
            3 => 'commentsCount',
            4 => 'likesCount',
            5 => 'a.createdAt',
        ];

        $orderColumn = $columns[$orders[0]['column'] ?? 0] ?? 'a.id';
        $orderDir = $orders[0]['dir'] ?? 'desc';

        $results = $articleRepository->findForDataTable($start, $length, $search, $orderColumn, $orderDir);

        $data = [];
        foreach ($results['data'] as $article) {
            $categoryNames = array_map(fn($category) => $category->getTitle(), $article->getCategories()->toArray());

            $data[] = [
                'id' => $article->getId(),
                'title' => htmlspecialchars($article->getTitle()),
                'categories' => implode(', ', $categoryNames),
                'commentsCount' => $article->getComments()->count(),
                'likesCount' => $article->getLikes()->count(),
                'createdAt' => $article->getCreatedAt()->format('d/m/Y H:i'),
                'actions' => $this->renderView('article/_actions.html.twig', [
                    'article' => $article
                ])
            ];
        }

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $results['totalCount'],
            'recordsFiltered' => $results['filteredCount'],
            'data' => $data
        ]);
    }

    #[Route('/search', name: 'api_combined_search', methods: ['GET'])]
    public function combinedSearch(
        Request $request,
        ArticleRepository $articleRepository,
        CategoryRepository $categoryRepository
    ): JsonResponse {
        $query = $request->query->get('q', '');

        if (strlen($query) < 2) {
            return new JsonResponse([
                'articles' => [],
                'categories' => []
            ]);
        }

        $articles = $articleRepository->searchByTitle($query, 5);
        $categories = $categoryRepository->searchByTitleOrDescription($query, 5);

        return new JsonResponse([
            'articles' => array_map(fn($article) => [
                'id' => $article->getId(),
                'title' => $article->getTitle(),
                'categories' => array_map(fn($c) => $c->getTitle(), $article->getCategories()->toArray())
            ], $articles),

            'categories' => array_map(fn($category) => [
                'id' => $category->getId(),
                'title' => $category->getTitle(),
                'description' => $category->getDescription()
            ], $categories)
        ]);
    }

    #[Route('/article/{id}/comment', name: 'api_article_comment', methods: ['POST'])]
    public function addComment(Article $article, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $comment = new Comment();
        $comment->setArticle($article);
        $comment->setCreatedAt(new \DateTimeImmutable());

        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($comment);
            $entityManager->flush();

            return new JsonResponse([
                'success' => true,
                'commentHtml' => $this->renderView('comment/_comment.html.twig', [
                    'comment' => $comment
                ]),
                'commentsCount' => $article->getComments()->count()
            ]);
        }

        $errors = [];
        foreach ($form->getErrors(true) as $error) {
            $errors[] = $error->getMessage();
        }

        return new JsonResponse([
            'success' => false,
            'error' => count($errors) > 0 ? $errors[0] : 'Formulaire invalide'
        ], JsonResponse::HTTP_BAD_REQUEST);
    }

    #[Route('/article/{id}/like', name: 'api_article_like', methods: ['POST'])]
    public function likeArticle(
        Article $article,
        Request $request,
        EntityManagerInterface $entityManager,
        ArticleLikeRepository $likeRepository
    ): JsonResponse {
        $ipAddress = $request->getClientIp();

        $existingLike = $likeRepository->findOneBy([
            'article' => $article,
            'ipAddress' => $ipAddress
        ]);

        if ($existingLike) {
            $entityManager->remove($existingLike);
            $entityManager->flush();

            return new JsonResponse([
                'success' => true,
                'liked' => false,
                'likesCount' => $article->getLikes()->count()
            ]);
        }

        $like = new ArticleLike();
        $like->setArticle($article);
        $like->setIpAddress($ipAddress);
        $like->setCreatedAt(new \DateTimeImmutable());

        $entityManager->persist($like);
        $entityManager->flush();

        return new JsonResponse([
            'success' => true,
            'liked' => true,
            'likesCount' => $article->getLikes()->count()
        ]);
    }
	
}
