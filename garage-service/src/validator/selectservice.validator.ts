import { body } from "express-validator";

export const selectServiceValidator = [
  body("add_price_hours_id").not().isEmpty(),
  body("service_garage_provides")
    .notEmpty()
    .withMessage("Field should not be empty"),

  body("emergency").notEmpty().withMessage("Must match with provided options"),
  body("garageInformationId").notEmpty().withMessage("Field must be unique"),
];
