import { body } from "express-validator";

export const userSignUpValidator = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("checkbox").isBoolean().withMessage("Must be a boolean true or false"),
];
