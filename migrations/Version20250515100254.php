<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250515100254 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE Article (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(255) NOT NULL, content CLOB NOT NULL, createAt DATETIME NOT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE article_category (article_id INTEGER NOT NULL, category_id INTEGER NOT NULL, PRIMARY KEY(article_id, category_id), CONSTRAINT FK_53A4EDAA7294869C FOREIGN KEY (article_id) REFERENCES Article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_53A4EDAA12469DE2 FOREIGN KEY (category_id) REFERENCES Category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_53A4EDAA7294869C ON article_category (article_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_53A4EDAA12469DE2 ON article_category (category_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE Comment (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, article_id INTEGER NOT NULL, author VARCHAR(255) NOT NULL, content CLOB NOT NULL, createdAt DATETIME NOT NULL, CONSTRAINT FK_5BC96BF07294869C FOREIGN KEY (article_id) REFERENCES Article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_5BC96BF07294869C ON Comment (article_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP TABLE Article
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE article_category
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE Comment
        SQL);
    }
}
