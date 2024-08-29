import { body } from "express-validator";

export const tackOrderValidator = [
  body("booking_status")
    .isBoolean()
    .withMessage("Must select from provided field"),
  body("status").isBoolean().withMessage("Must select from provided field"),
  body("status_date").isDate(),
];
