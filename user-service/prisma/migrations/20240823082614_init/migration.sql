-- CreateTable
CREATE TABLE `UserSignUp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country_id` INTEGER NOT NULL,
    `phone_no` VARCHAR(191) NOT NULL,
    `verification_code` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `alternate_phone_no` VARCHAR(191) NULL,
    `profile_photo` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_sign_up_id` INTEGER NOT NULL,
    `vehicle_type_id` INTEGER NOT NULL,
    `vehicle_model_id` INTEGER NOT NULL,
    `vehicle_registration_no` VARCHAR(191) NOT NULL,
    `vehicle_color_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddressInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_sign_up_id` INTEGER NOT NULL,
    `address_line1` VARCHAR(191) NOT NULL,
    `address_line2` VARCHAR(191) NULL,
    `city_id` INTEGER NOT NULL,
    `state_id` INTEGER NOT NULL,
    `country_id` INTEGER NOT NULL,
    `pin_code` VARCHAR(191) NOT NULL,
    `place_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_sign_up_id` INTEGER NOT NULL,
    `service_total` DOUBLE NOT NULL,
    `convenience_charge` DOUBLE NOT NULL,
    `coupon_code` VARCHAR(191) NULL,
    `payment_method` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccountSetting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_sign_up_id` INTEGER NOT NULL,
    `notification` BOOLEAN NOT NULL,

    UNIQUE INDEX `AccountSetting_user_sign_up_id_key`(`user_sign_up_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VehicleInformation` ADD CONSTRAINT `VehicleInformation_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `UserSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddressInformation` ADD CONSTRAINT `AddressInformation_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `UserSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `UserSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AccountSetting` ADD CONSTRAINT `AccountSetting_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `UserSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
