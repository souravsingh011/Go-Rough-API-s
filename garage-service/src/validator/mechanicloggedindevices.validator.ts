import { body } from "express-validator";

export const mechanicLoggedInDeviceValidator = [
  body("mechanic_fcm_token")
    .not()
    .isEmpty()
    .withMessage("Filed should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("mechanic_is_valid")
    .isBoolean()
    .withMessage("Must be a boolean true or false"),
  body("mechanic_device_type")
    .not()
    .isEmpty()
    .withMessage("Must select from provided options"),
  body("mechanic_device_name")
    .not()
    .isEmpty()
    .withMessage("Filed should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("mechanic_last_active")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isDate()
    .withMessage("Must be a valid date"),

  body("edit_details_op")
    .isBoolean()
    .withMessage("Must be a boolean true or false"),
  body("mechanicSignUpId").not().isEmpty(),
];
