/*
  Warnings:

  - A unique constraint covering the columns `[user_sign_up_id]` on the table `addressInformation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_sign_up_id]` on the table `payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_sign_up_id]` on the table `vehicleInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `addressInformation_user_sign_up_id_key` ON `addressInformation`(`user_sign_up_id`);

-- CreateIndex
CREATE UNIQUE INDEX `payment_user_sign_up_id_key` ON `payment`(`user_sign_up_id`);

-- CreateIndex
CREATE UNIQUE INDEX `vehicleInformation_user_sign_up_id_key` ON `vehicleInformation`(`user_sign_up_id`);
