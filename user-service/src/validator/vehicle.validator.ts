import { body, ValidationChain } from "express-validator";

export const vehicleValidator: ValidationChain[] = [
  body("user_sign_up_id")
    .notEmpty()
    .withMessage("User sign-up ID should not be empty"),

  body("vehicle_type_id")
    .notEmpty()
    .withMessage("Vehicle type ID should not be empty"),

  body("vehicle_model_id")
    .notEmpty()
    .withMessage("Vehicle model ID should not be empty"),

  body("vehicle_registration_no")
    .notEmpty()
    .withMessage("Vehicle registration number should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage(
      "Vehicle registration number must be between 6 and 255 characters"
    ),

  body("vehicle_color_id")
    .notEmpty()
    .withMessage("Vehicle color ID should not be empty"),
];
