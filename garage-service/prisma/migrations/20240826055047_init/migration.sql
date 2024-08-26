-- DropForeignKey
ALTER TABLE `addservice` DROP FOREIGN KEY `AddService_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `addspecialoffer` DROP FOREIGN KEY `AddSpecialOffer_garageInformationId_fkey`;

-- DropForeignKey
ALTER TABLE `customservice` DROP FOREIGN KEY `CustomService_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `garageinformation` DROP FOREIGN KEY `GarageInformation_mechanicSignUpId_fkey`;

-- DropForeignKey
ALTER TABLE `home` DROP FOREIGN KEY `Home_garageInformationId_fkey`;

-- DropForeignKey
ALTER TABLE `mechanicdetails` DROP FOREIGN KEY `MechanicDetails_mechanicSignUpId_fkey`;

-- DropForeignKey
ALTER TABLE `mechanicloggedindevices` DROP FOREIGN KEY `MechanicLoggedInDevices_mechanicSignUpId_fkey`;

-- DropForeignKey
ALTER TABLE `paymentmethod` DROP FOREIGN KEY `PaymentMethod_garageInformationId_fkey`;

-- DropForeignKey
ALTER TABLE `selectservice` DROP FOREIGN KEY `SelectService_garageInformationId_fkey`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `Service_garageInformationId_fkey`;

-- DropForeignKey
ALTER TABLE `serviceincludes` DROP FOREIGN KEY `ServiceIncludes_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `servicetype` DROP FOREIGN KEY `ServiceType_serviceId_fkey`;

-- AddForeignKey
ALTER TABLE `mechanicLoggedInDevices` ADD CONSTRAINT `mechanicLoggedInDevices_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `mechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `garageInformation` ADD CONSTRAINT `garageInformation_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `mechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `selectservice` ADD CONSTRAINT `selectservice_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service` ADD CONSTRAINT `service_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `serviceIncludes` ADD CONSTRAINT `serviceIncludes_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `serviceType` ADD CONSTRAINT `serviceType_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customservice` ADD CONSTRAINT `customservice_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addservice` ADD CONSTRAINT `addservice_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addSpecialOffer` ADD CONSTRAINT `addSpecialOffer_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paymentMethod` ADD CONSTRAINT `paymentMethod_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mechanicDetails` ADD CONSTRAINT `mechanicDetails_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `mechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `home` ADD CONSTRAINT `home_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `home` RENAME INDEX `Home_garageInformationId_key` TO `home_garageInformationId_key`;

-- RenameIndex
ALTER TABLE `selectservice` RENAME INDEX `SelectService_garageInformationId_key` TO `selectservice_garageInformationId_key`;
