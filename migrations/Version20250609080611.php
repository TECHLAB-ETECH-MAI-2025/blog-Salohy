<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250609080611 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE Message (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sender_id INTEGER NOT NULL, receiver_id INTEGER NOT NULL, content VARCHAR(255) NOT NULL, createdAt DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , CONSTRAINT FK_790009E3F624B39D FOREIGN KEY (sender_id) REFERENCES User (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_790009E3CD53EDB6 FOREIGN KEY (receiver_id) REFERENCES User (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_790009E3F624B39D ON Message (sender_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_790009E3CD53EDB6 ON Message (receiver_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP TABLE Message
        SQL);
    }
}
