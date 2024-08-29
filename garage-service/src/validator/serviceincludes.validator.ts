import { body } from "express-validator";

export const serviceIncludeValidator = [
  body("engine_oil_replacement").not().isEmpty().isBoolean(),
  body("oil_filter_replacement").not().isEmpty().isBoolean(),
  body("air_filter_cleaning").not().isEmpty().isBoolean(),
  body("coolant_top_up").not().isEmpty().isBoolean(),
  body("windshield_replacement").not().isEmpty().isBoolean(),
  body("battery_water_top_up").not().isEmpty().isBoolean(),
  body("brakepad_sparkplugs_checking").not().isEmpty().isBoolean(),
  body("car_wash").not().isEmpty().isBoolean(),
  body("interior_vacuuming").not().isEmpty().isBoolean(),
  body("serviceId").not().isEmpty(),
];
