import { body } from "express-validator";

export const paymentMethodValidator = [
  body("garage_information_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("upi_number").not().isEmpty().withMessage("Field should not be empty"),

  body("card_number").not().isEmpty().withMessage("Field should not be empty"),
  body("expiry_date")
    .not()
    .isEmpty()
    .isDate()
    .withMessage("Must be a valid date"),
  body("cvv").not().isEmpty().withMessage("Field should not be empty"),
  body("card_holder").not().isEmpty().withMessage("Field should not be empty"),
];
