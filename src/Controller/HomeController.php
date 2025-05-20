<?php

namespace App\Controller;

use Knp\Component\Pager\PaginatorInterface;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;


final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(ArticleRepository $articleRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $pagination = $paginator->paginate(
            $articleRepository->findBy([], ['createAt' => 'DESC']),
            $request->query->getInt('page', 1),
            6 
        );

        return $this->render('home/index.html.twig', [
            'articles' => $pagination,
        ]);
    }
}
