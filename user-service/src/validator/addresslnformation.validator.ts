import { body } from "express-validator";

export const addressInformationValidator = [
  body("user_sign_up_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("address_line1")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("address_line2")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("city_id").not().isEmpty().withMessage("Field should not be empty"),
  body("state_id").not().isEmpty().withMessage("Field should not be empty"),
  body("country_id").not().isEmpty().withMessage("Field should not be empty"),
  body("pin_code")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("place_id").not().isEmpty().withMessage("Field should not be empty"),
];
