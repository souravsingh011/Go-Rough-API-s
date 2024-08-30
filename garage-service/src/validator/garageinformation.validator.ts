import { body } from "express-validator";

export const garageInformationValidator = [
  body("garage_business_hours_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("address_line1")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("address_line2")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("gst_number")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("cin_number")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("garage_phone_number")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("garage_name")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("years_in_business")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),

  body("business_license")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("profile_photo")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
];
