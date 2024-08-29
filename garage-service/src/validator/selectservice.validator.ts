import { body } from "express-validator";

export const selectServiceValidator = [
  body("add_price_hours_id").not().isEmpty(),
  body("service_garage_provides")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),

  body("emergency")
    .not()
    .isEmpty()
    .withMessage("Must match with provided options"),
  body("garageInformationId")
    .not()
    .isEmpty()
    .withMessage("Field must be unique"),
];
