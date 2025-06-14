# Blog Symfony - Projet TechLab

Projet réalisé dans le cadre de la formation **TechLab eTech PHP**

## Fonctionnalités principales

- Authentification (login, inscription)
- Création, édition et suppression d’articles
- Ajout de catégories à un article
- Commentaires
- Pagination
- Système de likes (par utilisateur connecté uniquement)
- Rôles (`ROLE_USER`, `ROLE_ADMIN`) avec accès restreint
- Dashboard d’administration complet
- Recherche (articles)

## Stack technique

- Symfony 6+
- Doctrine ORM
- Bootstrap 5 + FontAwesome
- KnpPaginatorBundle
- Twig
- JavaScript (AJAX, fetch)

## A venir

- Intégration de **Mercure** pour le chat en temps réel
- Création d’une **API REST** pour le front


## Lancement local

```bash
git clone [ton lien GitHub]
cd blog-symfony
composer install / npm install
php -S localhost:8000 -t public
