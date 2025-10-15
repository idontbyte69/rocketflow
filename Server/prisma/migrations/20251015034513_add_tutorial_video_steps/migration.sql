-- AlterTable
ALTER TABLE `tutorial` ADD COLUMN `steps` JSON NOT NULL,
    ADD COLUMN `videoUrl` VARCHAR(191) NULL;
