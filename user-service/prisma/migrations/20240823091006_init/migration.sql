-- DropForeignKey
ALTER TABLE `accountsetting` DROP FOREIGN KEY `AccountSetting_user_sign_up_id_fkey`;

-- DropForeignKey
ALTER TABLE `addressinformation` DROP FOREIGN KEY `AddressInformation_user_sign_up_id_fkey`;

-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `Payment_user_sign_up_id_fkey`;

-- DropForeignKey
ALTER TABLE `vehicleinformation` DROP FOREIGN KEY `VehicleInformation_user_sign_up_id_fkey`;

-- AddForeignKey
ALTER TABLE `vehicleInformation` ADD CONSTRAINT `vehicleInformation_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `userSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addressInformation` ADD CONSTRAINT `addressInformation_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `userSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `userSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accountSetting` ADD CONSTRAINT `accountSetting_user_sign_up_id_fkey` FOREIGN KEY (`user_sign_up_id`) REFERENCES `userSignUp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `accountsetting` RENAME INDEX `AccountSetting_user_sign_up_id_key` TO `accountSetting_user_sign_up_id_key`;
