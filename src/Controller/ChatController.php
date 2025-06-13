<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\User;
use App\Form\MessageForm;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/chat')]
class ChatController extends AbstractController
{
    #[Route('', name: 'chat_user_list')]
    public function list(Request $request, MessageRepository $messageRepository, EntityManagerInterface $em): Response
    {
        $currentUser = $this->getUser();
        if (!$currentUser instanceof User) {
            return $this->redirectToRoute('app_login');
        }

        $search = $request->query->get('q');

        // Récupère les utilisateurs avec lesquels il y a eu une discussion
        $messages = $messageRepository->createQueryBuilder('m')
            ->where('m.sender = :user OR m.receiver = :user')
            ->setParameter('user', $currentUser)
            ->getQuery()
            ->getResult();

        $conversationUsers = [];

        foreach ($messages as $message) {
            $otherUser = $message->getSender() === $currentUser
                ? $message->getReceiver()
                : $message->getSender();

            if (!in_array($otherUser, $conversationUsers, true)) {
                $conversationUsers[] = $otherUser;
            }
        }

        // Si recherche, on propose d'autres utilisateurs (hors currentUser)
        if ($search) {
            $userRepo = $em->getRepository(User::class);
            $queryBuilder = $userRepo->createQueryBuilder('u')
            ->where('u != :current')
            ->andWhere('u.email LIKE :q OR u.firstName LIKE :q OR u.lastName LIKE :q')
            ->setParameter('current', $currentUser)
            ->setParameter('q', '%' . $search . '%');


            $searchResults = $queryBuilder->getQuery()->getResult();
        } else {
            $searchResults = [];
        }

        return $this->render('chat/user_list.html.twig', [
            'users' => $conversationUsers,
            'search_results' => $searchResults,
            'search' => $search,
        ]);
    }


    #[Route('/{receiverId}', name: 'chat_index')]
    public function index(
        int $receiverId,
        MessageRepository $messageRepository,
        EntityManagerInterface $entityManager,
        Request $request
    ): Response {
        $currentUser = $this->getUser();
        if (!$currentUser instanceof User) {
            throw $this->createAccessDeniedException('You must be logged in.');
        }

        $receiver = $entityManager->getRepository(User::class)->find($receiverId);
        if (!$receiver) {
            throw $this->createNotFoundException('User not found.');
        }

        $messages = $messageRepository->findConversation($currentUser->getId(), $receiverId);

        $message = new Message();
        $form = $this->createForm(MessageForm::class, $message);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $message->setSender($currentUser);
            $message->setReceiver($receiver);
            $message->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($message);
            $entityManager->flush();

            return $this->redirectToRoute('chat_index', ['receiverId' => $receiverId]);
        }

        return $this->render('chat/index.html.twig', [
            'messages' => $messages,
            'receiver' => $receiver,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/refresh/{receiverId}', name: 'chat_refresh')]
    public function refresh(
        int $receiverId,
        MessageRepository $messageRepository,
        EntityManagerInterface $entityManager
    ): Response {
        $currentUser = $this->getUser();
        $receiver = $entityManager->getRepository(User::class)->find($receiverId);

        if (!$currentUser || !$receiver) {
            throw $this->createAccessDeniedException();
        }

        $messages = $messageRepository->findConversation($currentUser->getId(), $receiverId);

        return $this->render('chat/_messages.html.twig', [
            'messages' => $messages,
            'currentUser' => $currentUser,
        ]);
    }

    #[Route('/messages', name: 'chat_messages')]
    public function messages(Request $request, MessageRepository $messageRepository): Response
    {
        $currentUser = $this->getUser();
        $receiverId = $request->query->get('receiver');

        if (!$receiverId) {
            return new Response('Receiver not specified.', 400);
        }

        $messages = $messageRepository->findConversation($currentUser->getId(), $receiverId);

        return $this->render('chat/_messages.html.twig', [
            'messages' => $messages,
            'currentUser' => $currentUser,
        ]);
    }

    #[Route('/send', name: 'chat_send', methods: ['POST'])]
    public function sendMessage(Request $request, EntityManagerInterface $em): JsonResponse
    {
        try {
            $content = $request->request->get('content');
            $receiverId = $request->request->get('receiver');

            if (!$content || !$receiverId) {
                return new JsonResponse(['success' => false, 'error' => 'Invalid data'], 400);
            }

            /** @var User $sender */
            $sender = $this->getUser();
            $receiver = $em->getRepository(User::class)->find($receiverId);

            if (!$receiver) {
                return new JsonResponse(['success' => false, 'error' => 'Receiver not found'], 404);
            }

            $message = new Message();
            $message->setSender($sender);
            $message->setReceiver($receiver);
            $message->setContent($content);
            $message->setCreatedAt(new \DateTimeImmutable());

            $em->persist($message);
            $em->flush();

            return new JsonResponse(['success' => true]);
        } catch (\Throwable $e) {
            return new JsonResponse([
                'success' => false,
                'error' => 'Server error: ' . $e->getMessage(),
            ], 500);
        }
    }

}

