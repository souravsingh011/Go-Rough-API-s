import { body } from "express-validator";

export const customServiceValidator = [
  body("title").not().isEmpty().withMessage("Field is required"),
  body("price").not().isEmpty().isFloat().withMessage("Must provide a number"),
  body("isAddOn").isBoolean().withMessage("Must be a boolean true or false"),
  body("serviceId").not().isEmpty().withMessage("Field is required"),
];
