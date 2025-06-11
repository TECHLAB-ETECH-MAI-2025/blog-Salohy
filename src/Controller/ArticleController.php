<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\ArticleLike;
use App\Form\ArticleForm;
use App\Form\CommentForm;
use App\Repository\ArticleLikeRepository;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;

#[Route('/articles')]
class ArticleController extends AbstractController
{
    #[Route('', name: 'app_article_index')]
    public function index(Request $request, ArticleRepository $articleRepository, PaginatorInterface $paginator): Response
    {
        $query = $request->query->get('q');

        $qb = $articleRepository->createQueryBuilder('a')
            ->leftJoin('a.categories', 'c')
            ->addSelect('c');

        if ($query) {
            $qb->where('a.title LIKE :search')
               ->setParameter('search', '%' . $query . '%');
        }

        $pagination = $paginator->paginate(
            $qb->getQuery(),
            $request->query->getInt('page', 1),
            6
        );

        return $this->render('article/index.html.twig', [
            'articles' => $pagination,
            'search' => $query,
        ]);
    }

    #[Route('/new', name: 'app_article_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new Article();
        $form = $this->createForm(ArticleForm::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $article->setCreateAt(new \DateTime());
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash('success', 'The article was created successfully');
            return $this->redirectToRoute('app_article_index');
        }

        return $this->render('article/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_article_show', methods: ['GET', 'POST'])]
    public function show(Request $request, Article $article, EntityManagerInterface $entityManager, ArticleLikeRepository $likeRepository, PaginatorInterface $paginator): Response
    {
        $comment = new Comment();
        $comment->setArticle($article);
        $comment->setCreatedAt(new \DateTime());

        $form = $this->createForm(CommentForm::class, $comment);
        $form->handleRequest($request);

        $ipAddress = $request->getClientIp();
        $isLiked = $likeRepository->findOneBy([
            'article' => $article,
            'ipAddress' => $ipAddress,
        ]) !== null;

        $pagination = $paginator->paginate(
            $article->getComments(),
            $request->query->getInt('page', 1), 
            6
        );

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($comment);
            $entityManager->flush();

            return $this->redirectToRoute('app_article_show', ['id' => $article->getId()]);
        }

        return $this->render('article/show.html.twig', [
            'article' => $article,
            'commentForm' => $form->createView(),
            'is_liked' => $isLiked,
            'pagination' => $pagination,
        ]);
    }

    #[Route('/{id}/like', name: 'app_article_like', methods: ['POST'])]
    public function like(Request $request, Article $article, EntityManagerInterface $em, ArticleLikeRepository $likeRepo): Response
    {
        if (!$this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->json(['success' => false, 'message' => 'Not authenticated'], 403);
        }

        /** @var User $user */
        $user = $this->getUser();

        $existingLike = $likeRepo->findOneBy([
            'article' => $article,
            'user' => $user
        ]);

        $liked = false;

        if ($existingLike) {
            $em->remove($existingLike);
        } else {
            $like = new ArticleLike();
            $like->setArticle($article);
            $like->setUser($user);
            $like->setCreatedAt(new \DateTimeImmutable());
            $em->persist($like);
            $liked = true;
        }

        $em->flush();

        return $this->json([
            'liked' => $liked,
            'likes' => count($article->getLikes()),
        ]);
    }


    #[Route('/{id}/edit', name: 'app_article_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Article $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ArticleForm::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash('success', 'The article was updated successfully');
            return $this->redirectToRoute('app_article_index');
        }

        return $this->render('article/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/delete', name: 'app_article_delete', methods: ['POST'])]
    public function delete(Request $request, Article $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $article->getId(), $request->request->get('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
            $this->addFlash('success', 'The article was deleted successfully');
        }

        return $this->redirectToRoute('app_article_index');
    }
}
