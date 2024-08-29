import { body } from "express-validator";

export const mechanicSignUpValidator = [
  body("count_id").not().isEmpty().withMessage("Field should not be empty"),

  body("phone_no")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 10 })
    .withMessage("Minimum 10 character"),
  body("verification_code")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("full_name").not().isEmpty().withMessage("Field should not be empty"),
  body("password").not().isEmpty().withMessage("Field should not be empty"),
  body("alternate_phone_no")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("profile_photo")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("role").not().isEmpty().withMessage("Field should not be empty"),
];
