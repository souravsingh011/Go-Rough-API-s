import { body } from "express-validator";

export const homeValidator = [
  body("status")
    .not()
    .isEmpty()
    .withMessage("Must select from provided options"),
  body("garageInformationId")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
];
