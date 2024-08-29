import { body } from "express-validator";

export const addSpecialOfferValidator = [
  body("service_id").not().isEmpty().withMessage("Field should not be empty"),
  body("applicable_services_id")
    .not()
    .isEmpty()
    .withMessage("Field is required"),
  body("special_offer_description")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("minimum_purchase_requirement")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("special_condition")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("offer_images")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("garageInformationId")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
];
