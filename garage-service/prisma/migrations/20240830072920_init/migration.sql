/*
  Warnings:

  - You are about to drop the column `mechanicSignUpId` on the `garageinformation` table. All the data in the column will be lost.
  - You are about to drop the `selectservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `addservice` DROP FOREIGN KEY `addservice_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `customservice` DROP FOREIGN KEY `customservice_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `garageinformation` DROP FOREIGN KEY `garageInformation_mechanicSignUpId_fkey`;

-- DropForeignKey
ALTER TABLE `selectservice` DROP FOREIGN KEY `selectservice_garageInformationId_fkey`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `service_garageInformationId_fkey`;

-- DropForeignKey
ALTER TABLE `serviceincludes` DROP FOREIGN KEY `serviceIncludes_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `servicetype` DROP FOREIGN KEY `serviceType_serviceId_fkey`;

-- AlterTable
ALTER TABLE `garageinformation` DROP COLUMN `mechanicSignUpId`,
    ADD COLUMN `selectserviceId` INTEGER NULL;

-- DropTable
DROP TABLE `selectservice`;

-- DropTable
DROP TABLE `service`;

-- CreateTable
CREATE TABLE `garage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mechanicSignUpId` INTEGER NOT NULL,
    `garageInformationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `select_service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `add_price_hours_id` INTEGER NOT NULL,
    `service_garage_provides` VARCHAR(191) NOT NULL,
    `emergency` ENUM('YES', 'NO') NOT NULL,
    `garageId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('ONGOING', 'UPCOMING', 'PAST') NOT NULL,
    `service_type_id` INTEGER NOT NULL,
    `service_includes_id` INTEGER NOT NULL,
    `garageId` INTEGER NOT NULL,
    `garageInformationId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `garage` ADD CONSTRAINT `garage_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `mechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `garage` ADD CONSTRAINT `garage_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `select_service` ADD CONSTRAINT `select_service_garageId_fkey` FOREIGN KEY (`garageId`) REFERENCES `garage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_garageId_fkey` FOREIGN KEY (`garageId`) REFERENCES `garage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `serviceIncludes` ADD CONSTRAINT `serviceIncludes_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `serviceType` ADD CONSTRAINT `serviceType_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customservice` ADD CONSTRAINT `customservice_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addservice` ADD CONSTRAINT `addservice_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
