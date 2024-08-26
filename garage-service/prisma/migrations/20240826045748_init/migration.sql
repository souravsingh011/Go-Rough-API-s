-- CreateTable
CREATE TABLE `MechanicSignUp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `county_id` INTEGER NOT NULL,
    `phone_no` VARCHAR(191) NOT NULL,
    `verification_code` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `alternate_phone_no` VARCHAR(191) NULL,
    `profile_photo` VARCHAR(191) NULL,
    `roles` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MechanicLoggedInDevices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mechanic_fcm_token` VARCHAR(191) NOT NULL,
    `mechanic_is_valid` BOOLEAN NOT NULL,
    `mechanic_device_type` ENUM('MOBILE', 'TABLET', 'DESKTOP') NOT NULL,
    `mechanic_device_name` VARCHAR(191) NOT NULL,
    `mechanic_last_active` DATETIME(3) NOT NULL,
    `edit_details_op` BOOLEAN NOT NULL,
    `mechanicSignUpId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GarageInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mechanicSignUpId` INTEGER NOT NULL,
    `garage_business_hours_id` INTEGER NOT NULL,
    `address_line1` VARCHAR(191) NOT NULL,
    `address_line2` VARCHAR(191) NOT NULL,
    `gst_number` VARCHAR(191) NOT NULL,
    `cin_number` VARCHAR(191) NOT NULL,
    `garage_phone_number` VARCHAR(191) NOT NULL,
    `garage_name` VARCHAR(191) NOT NULL,
    `years_in_business` INTEGER NOT NULL,
    `business_license` VARCHAR(191) NOT NULL,
    `profile_photo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SelectService` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `add_price_hours_id` INTEGER NOT NULL,
    `service_garage_provides` VARCHAR(191) NOT NULL,
    `emergency` ENUM('YES', 'NO') NOT NULL,
    `garageInformationId` INTEGER NOT NULL,

    UNIQUE INDEX `SelectService_garageInformationId_key`(`garageInformationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('ONGOING', 'UPCOMING', 'PAST') NOT NULL,
    `garageInformationId` INTEGER NOT NULL,
    `service_type_id` INTEGER NOT NULL,
    `service_includes_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceIncludes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `engine_oil_replacement` BOOLEAN NOT NULL,
    `oil_filter_replacement` BOOLEAN NOT NULL,
    `air_filter_cleaning` BOOLEAN NOT NULL,
    `coolant_top_up` BOOLEAN NOT NULL,
    `windshield_replacement` BOOLEAN NOT NULL,
    `battery_water_top_up` BOOLEAN NOT NULL,
    `brakepad_sparkplugs_checking` BOOLEAN NOT NULL,
    `car_wash` BOOLEAN NOT NULL,
    `interior_vacuuming` BOOLEAN NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `type` ENUM('KM_MONTHS', 'HOURS', 'WARRANTY') NOT NULL,
    `km_months` INTEGER NOT NULL,
    `hours` INTEGER NOT NULL,
    `warranty` VARCHAR(191) NOT NULL,
    `included_services` VARCHAR(191) NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomService` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `isAddOn` BOOLEAN NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddService` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `checkbox` BOOLEAN NOT NULL,
    `price_hour_id` INTEGER NOT NULL,
    `emergency` ENUM('YES', 'NO') NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddSpecialOffer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_id` INTEGER NOT NULL,
    `applicable_services_id` INTEGER NOT NULL,
    `special_offer_description` VARCHAR(191) NOT NULL,
    `minimum_purchase_requirement` VARCHAR(191) NOT NULL,
    `special_condition` VARCHAR(191) NOT NULL,
    `offer_images` VARCHAR(191) NOT NULL,
    `garageInformationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrackOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_status` ENUM('ONGOING', 'UPCOMING', 'PAST') NOT NULL,
    `status` ENUM('ONGOING', 'UPCOMING', 'PAST') NOT NULL,
    `status_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentMethod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `garageInformationId` INTEGER NOT NULL,
    `upi_number` VARCHAR(191) NOT NULL,
    `card_number` VARCHAR(191) NOT NULL,
    `expiry_date` DATETIME(3) NOT NULL,
    `cvv` VARCHAR(191) NOT NULL,
    `card_holder` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MechanicDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `mechanicSignUpId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Home` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('DIRECTION', 'REJECT', 'ACCEPT') NOT NULL,
    `garageInformationId` INTEGER NOT NULL,

    UNIQUE INDEX `Home_garageInformationId_key`(`garageInformationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MechanicLoggedInDevices` ADD CONSTRAINT `MechanicLoggedInDevices_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `MechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GarageInformation` ADD CONSTRAINT `GarageInformation_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `MechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SelectService` ADD CONSTRAINT `SelectService_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `GarageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `GarageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceIncludes` ADD CONSTRAINT `ServiceIncludes_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceType` ADD CONSTRAINT `ServiceType_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomService` ADD CONSTRAINT `CustomService_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddService` ADD CONSTRAINT `AddService_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddSpecialOffer` ADD CONSTRAINT `AddSpecialOffer_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `GarageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentMethod` ADD CONSTRAINT `PaymentMethod_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `GarageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MechanicDetails` ADD CONSTRAINT `MechanicDetails_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `MechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Home` ADD CONSTRAINT `Home_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `GarageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
