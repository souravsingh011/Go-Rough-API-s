import { body } from "express-validator";

export const serviceValidator = [
  body("status")
    .not()
    .isEmpty()
    .withMessage("Must select from provided options"),
  body("garage_information_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),

  body("add_service_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("service_type_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
];
