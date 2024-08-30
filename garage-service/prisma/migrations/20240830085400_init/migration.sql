/*
  Warnings:

  - You are about to drop the column `garageId` on the `select_service` table. All the data in the column will be lost.
  - You are about to drop the column `garageId` on the `services` table. All the data in the column will be lost.
  - Added the required column `serviceId` to the `paymentMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garagInformationeId` to the `select_service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `trackOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `select_service` DROP FOREIGN KEY `select_service_garageId_fkey`;

-- DropForeignKey
ALTER TABLE `services` DROP FOREIGN KEY `services_garageId_fkey`;

-- AlterTable
ALTER TABLE `paymentmethod` ADD COLUMN `serviceId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `select_service` DROP COLUMN `garageId`,
    ADD COLUMN `garagInformationeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `services` DROP COLUMN `garageId`;

-- AlterTable
ALTER TABLE `trackorder` ADD COLUMN `serviceId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `includeservice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceId` INTEGER NOT NULL,
    `selectserviceId` INTEGER NOT NULL,
    `serviceIncludesId` INTEGER NOT NULL,
    `serviceTypeId` INTEGER NOT NULL,
    `customserviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `includeservice` ADD CONSTRAINT `includeservice_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `includeservice` ADD CONSTRAINT `includeservice_selectserviceId_fkey` FOREIGN KEY (`selectserviceId`) REFERENCES `select_service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `includeservice` ADD CONSTRAINT `includeservice_serviceIncludesId_fkey` FOREIGN KEY (`serviceIncludesId`) REFERENCES `serviceIncludes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `includeservice` ADD CONSTRAINT `includeservice_serviceTypeId_fkey` FOREIGN KEY (`serviceTypeId`) REFERENCES `serviceType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `includeservice` ADD CONSTRAINT `includeservice_customserviceId_fkey` FOREIGN KEY (`customserviceId`) REFERENCES `customservice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `select_service` ADD CONSTRAINT `select_service_garagInformationeId_fkey` FOREIGN KEY (`garagInformationeId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trackOrder` ADD CONSTRAINT `trackOrder_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paymentMethod` ADD CONSTRAINT `paymentMethod_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
