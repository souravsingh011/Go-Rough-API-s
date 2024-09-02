/*
  Warnings:

  - A unique constraint covering the columns `[phone_no]` on the table `mechanicSignUp` will be added. If there are existing duplicate values, this will fail.
  - Made the column `garageInformationId` on table `services` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `services` DROP FOREIGN KEY `services_garageInformationId_fkey`;

-- AlterTable
ALTER TABLE `services` MODIFY `garageInformationId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `mechanicSignUp_phone_no_key` ON `mechanicSignUp`(`phone_no`);

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
