import { body } from "express-validator";

export const paymentValidator = [
  body("user_sign_up_id")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty"),
  body("service_total")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isFloat(),
  body("convenience_charge")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isFloat(),
  body("coupon_code")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
  body("payment_method")
    .not()
    .isEmpty()
    .withMessage("Field should not be empty")
    .isLength({ min: 6, max: 255 })
    .withMessage("Minimum 6 character"),
];
