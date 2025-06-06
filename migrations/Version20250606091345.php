<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250606091345 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE Tag (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(50) NOT NULL, slug VARCHAR(60) NOT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE tag_article (tag_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(tag_id, article_id), CONSTRAINT FK_300B23CCBAD26311 FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_300B23CC7294869C FOREIGN KEY (article_id) REFERENCES Article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_300B23CCBAD26311 ON tag_article (tag_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_300B23CC7294869C ON tag_article (article_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP TABLE Tag
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tag_article
        SQL);
    }
}
