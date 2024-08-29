import { body } from "express-validator";

export const accountSettingValidator = [
  body("user_sign_up_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("notification")
    .isBoolean()
    .withMessage("Must be a boolean true or false"),
];
