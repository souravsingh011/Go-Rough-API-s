import { body } from "express-validator";

export const addServiceValidator = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("checkbox").isBoolean().withMessage("Must be a boolean true or false"),
  body("price_hour_id").notEmpty().withMessage("Must contain value"),
  body("serviceId").notEmpty().withMessage("Must contain value"),
  body("emergency").notEmpty().withMessage("Must select from provided option"),
];
