import { body } from "express-validator";

export const serviceTypeValidator = [
  body("title").not().isEmpty().withMessage("Field should not be empty"),
  body("type")
    .not()
    .isEmpty()
    .withMessage("Must select from the provided option"),
  body("km_months").not().isEmpty(),
  body("hours").not().isEmpty(),
  body("warranty").not().isEmpty().withMessage("Field should not be empty"),
  body("included_services")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("serviceId").not().isEmpty(),
];
