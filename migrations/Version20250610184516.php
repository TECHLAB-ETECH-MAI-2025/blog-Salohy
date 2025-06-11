<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250610184516 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TEMPORARY TABLE __temp__ArticleLike AS SELECT id, article_id, createdAt FROM ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ArticleLike (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, article_id INTEGER NOT NULL, user_id INTEGER DEFAULT NULL, createdAt DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , CONSTRAINT FK_55B95ADA7294869C FOREIGN KEY (article_id) REFERENCES Article (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_55B95ADAA76ED395 FOREIGN KEY (user_id) REFERENCES User (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            INSERT INTO ArticleLike (id, article_id, createdAt) SELECT id, article_id, createdAt FROM __temp__ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE __temp__ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_55B95ADA7294869C ON ArticleLike (article_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_55B95ADAA76ED395 ON ArticleLike (user_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TEMPORARY TABLE __temp__ArticleLike AS SELECT id, article_id, createdAt FROM ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ArticleLike (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, article_id INTEGER NOT NULL, createdAt DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , ipAddress VARCHAR(45) NOT NULL, CONSTRAINT FK_55B95ADA7294869C FOREIGN KEY (article_id) REFERENCES Article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            INSERT INTO ArticleLike (id, article_id, createdAt) SELECT id, article_id, createdAt FROM __temp__ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE __temp__ArticleLike
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_55B95ADA7294869C ON ArticleLike (article_id)
        SQL);
    }
}
