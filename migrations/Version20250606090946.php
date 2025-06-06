<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250606090946 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE ArticleRating (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, article_id INTEGER DEFAULT NULL, rating INTEGER NOT NULL, ipAddress VARCHAR(45) NOT NULL, createdAt DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , CONSTRAINT FK_91D4F66C7294869C FOREIGN KEY (article_id) REFERENCES Article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_91D4F66C7294869C ON ArticleRating (article_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ResetPasswordRequest (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER NOT NULL, selector VARCHAR(20) NOT NULL, hashedToken VARCHAR(100) NOT NULL, requestedAt DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , expiresAt DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , CONSTRAINT FK_35370143A76ED395 FOREIGN KEY (user_id) REFERENCES User (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_35370143A76ED395 ON ResetPasswordRequest (user_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP TABLE ArticleRating
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ResetPasswordRequest
        SQL);
    }
}
