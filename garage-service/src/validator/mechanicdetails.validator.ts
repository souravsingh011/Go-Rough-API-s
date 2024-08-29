import { body } from "express-validator";

export const mechanicDetailsValidator = [
  body("name")
    .not()
    .isEmpty()
    .withMessage("Must select from provided options")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("phone_number")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("mechanic_sign_up_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
];
