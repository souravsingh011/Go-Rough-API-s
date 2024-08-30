import { body } from "express-validator";

export const serviceValidator = [
  body("status")
    .not()
    .isEmpty()
    .withMessage("Must select from provided options"),
  body("garageInformationId")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),

  body("service_type_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("service_includes_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
];
