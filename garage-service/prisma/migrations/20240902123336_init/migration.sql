-- CreateTable
CREATE TABLE `garage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mechanicSignUpId` INTEGER NOT NULL,
    `garageInformationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mechanicSignUp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `county_id` INTEGER NOT NULL,
    `phone_no` VARCHAR(191) NOT NULL,
    `verification_code` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `alternate_phone_no` VARCHAR(191) NULL,
    `profile_photo` VARCHAR(191) NULL,
    `roles` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `mechanicSignUp_phone_no_key`(`phone_no`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mechanicRefreshToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `mechanic_id` INTEGER NOT NULL,
    `expires_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `mechanicRefreshToken_token_key`(`token`),
    INDEX `mechanicRefreshToken_mechanic_id_idx`(`mechanic_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mechanicLoggedInDevices` (
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
CREATE TABLE `garageInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
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
    `selectserviceId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `select_service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `add_price_hours_id` INTEGER NOT NULL,
    `service_garage_provides` VARCHAR(191) NOT NULL,
    `emergency` ENUM('YES', 'NO') NOT NULL,
    `garagInformationeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('ONGOING', 'UPCOMING', 'PAST') NOT NULL,
    `service_type_id` INTEGER NOT NULL,
    `service_includes_id` INTEGER NOT NULL,
    `garageInformationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `serviceIncludes` (
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
CREATE TABLE `serviceType` (
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
CREATE TABLE `customservice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `isAddOn` BOOLEAN NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addservice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `checkbox` BOOLEAN NOT NULL,
    `price_hour_id` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,
    `emergency` ENUM('YES', 'NO') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addSpecialOffer` (
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
CREATE TABLE `trackOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_status` ENUM('ONGOING', 'UPCOMING', 'PAST') NOT NULL,
    `status` ENUM('ONGOING', 'UPCOMING', 'PAST') NOT NULL,
    `status_date` DATETIME(3) NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paymentMethod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `garageInformationId` INTEGER NOT NULL,
    `upi_number` VARCHAR(191) NOT NULL,
    `card_number` VARCHAR(191) NOT NULL,
    `expiry_date` DATETIME(3) NOT NULL,
    `cvv` VARCHAR(191) NOT NULL,
    `card_holder` VARCHAR(191) NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mechanicDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `mechanicSignUpId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `home` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('DIRECTION', 'REJECT', 'ACCEPT') NOT NULL,
    `garageInformationId` INTEGER NOT NULL,

    UNIQUE INDEX `home_garageInformationId_key`(`garageInformationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `garage` ADD CONSTRAINT `garage_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `mechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `garage` ADD CONSTRAINT `garage_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mechanicRefreshToken` ADD CONSTRAINT `mechanicRefreshToken_mechanic_id_fkey` FOREIGN KEY (`mechanic_id`) REFERENCES `mechanicSignUp`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mechanicLoggedInDevices` ADD CONSTRAINT `mechanicLoggedInDevices_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `mechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `services` ADD CONSTRAINT `services_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `serviceIncludes` ADD CONSTRAINT `serviceIncludes_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `serviceType` ADD CONSTRAINT `serviceType_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customservice` ADD CONSTRAINT `customservice_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addservice` ADD CONSTRAINT `addservice_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addSpecialOffer` ADD CONSTRAINT `addSpecialOffer_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trackOrder` ADD CONSTRAINT `trackOrder_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paymentMethod` ADD CONSTRAINT `paymentMethod_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paymentMethod` ADD CONSTRAINT `paymentMethod_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mechanicDetails` ADD CONSTRAINT `mechanicDetails_mechanicSignUpId_fkey` FOREIGN KEY (`mechanicSignUpId`) REFERENCES `mechanicSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `home` ADD CONSTRAINT `home_garageInformationId_fkey` FOREIGN KEY (`garageInformationId`) REFERENCES `garageInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
