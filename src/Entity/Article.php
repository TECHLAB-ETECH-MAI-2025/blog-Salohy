<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?\DateTime $createAt = null;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'articles')]
    private Collection $categories;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Comment::class, cascade: ['persist', 'remove'])]
    private Collection $comments;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: ArticleLike::class, cascade: ['remove'])]
    private Collection $likes;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: ArticleRating::class, cascade: ['persist', 'remove'])]
    private Collection $ratings;

    #[ORM\ManyToMany(targetEntity: Tag::class, mappedBy: 'articles')]
    private Collection $tags;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->likes = new ArrayCollection();
        $this->ratings = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->createAt = new \DateTime();
    }

    public function getId(): ?int { return $this->id; }

    public function getTitle(): ?string { return $this->title; }

    public function setTitle(string $title): static
    {
        $this->title = $title;
        return $this;
    }

    public function getContent(): ?string { return $this->content; }

    public function setContent(string $content): static
    {
        $this->content = $content;
        return $this;
    }

    public function getCreateAt(): ?\DateTime { return $this->createAt; }

    public function setCreateAt(\DateTime $createAt): static
    {
        $this->createAt = $createAt;
        return $this;
    }

    public function getCategories(): Collection { return $this->categories; }

    public function addCategory(Category $category): static
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
        }
        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->categories->removeElement($category);
        return $this;
    }

    public function getComments(): Collection { return $this->comments; }

    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setArticle($this);
        }
        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            if ($comment->getArticle() === $this) {
                $comment->setArticle(null);
            }
        }
        return $this;
    }

    public function getLikes(): Collection { return $this->likes; }

    public function addLike(ArticleLike $like): static
    {
        if (!$this->likes->contains($like)) {
            $this->likes->add($like);
            $like->setArticle($this);
        }
        return $this;
    }

    public function removeLike(ArticleLike $like): static
    {
        if ($this->likes->removeElement($like)) {
            if ($like->getArticle() === $this) {
                $like->setArticle(null);
            }
        }
        return $this;
    }

    public function isLikedByUser(?User $user): bool
    {
        foreach ($this->likes as $like) {
            if ($like->getUser() === $user) {
                return true;
            }
        }
        return false;
    }

    public function getRatings(): Collection { return $this->ratings; }

    public function addRating(ArticleRating $rating): static
    {
        if (!$this->ratings->contains($rating)) {
            $this->ratings->add($rating);
            $rating->setArticle($this);
        }
        return $this;
    }

    public function removeRating(ArticleRating $rating): static
    {
        if ($this->ratings->removeElement($rating)) {
            if ($rating->getArticle() === $this) {
                $rating->setArticle(null);
            }
        }
        return $this;
    }

    public function calculateAverageRating(): float
    {
        if ($this->ratings->isEmpty()) {
            return 0.0;
        }

        $total = 0;
        foreach ($this->ratings as $rating) {
            $total += $rating->getRating();
        }

        return round($total / count($this->ratings), 1);
    }

    public function getAverageRating(): float
    {
        return $this->calculateAverageRating();
    }

    public function getTags(): Collection { return $this->tags; }

    public function addTag(Tag $tag): static
    {
        if (!$this->tags->contains($tag)) {
            $this->tags->add($tag);
            $tag->addArticle($this);
        }
        return $this;
    }

    public function removeTag(Tag $tag): static
    {
        if ($this->tags->removeElement($tag)) {
            $tag->removeArticle($this);
        }
        return $this;
    }
}
