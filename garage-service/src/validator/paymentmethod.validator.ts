import { body } from "express-validator";

export const paymentMethodValidator = [
  body("garageInformationId")
    .notEmpty()
    .withMessage("Field should not be empty"),
  body("upi_number").notEmpty().withMessage("Field should not be empty"),

  body("card_number").notEmpty().withMessage("Field should not be empty"),
  body("expiry_date").notEmpty().withMessage("Must be a valid date"),
  body("cvv").notEmpty().withMessage("Field should not be empty"),
  body("card_holder").notEmpty().withMessage("Field should not be empty"),
  body("serviceId").notEmpty(),
];
