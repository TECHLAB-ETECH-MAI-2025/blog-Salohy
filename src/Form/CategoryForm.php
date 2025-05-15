<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Article;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class CategoryForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de la catégorie',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Titre',
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 5,
                    'placeholder' => 'Décrivez cette catégorie',
                ],
            ])
            ->add('createAt', DateTimeType::class, [
                'label' => 'Date de création',
                'widget' => 'single_text',
                'attr' => ['class' => 'form-control']
            ])
            ->add('articles', EntityType::class, [
                'class' => Article::class,
                'choice_label' => 'title',
                'multiple' => true,
                'expanded' => true,
                'label' => 'Articles liés',
                'required' => false,
                'attr' => ['class' => 'form-check'],
                'label_attr' => ['class' => 'form-check-label'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Category::class,
        ]);
    }
}
