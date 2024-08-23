import express from "express";
import GarageBusinessHoursController from "../controller/garagebusinesshours.controller";

const GarageBusinessHoursRoute = express.Router();
const garageBusinessHoursController = new GarageBusinessHoursController();

GarageBusinessHoursRoute.route("/")
  .post(garageBusinessHoursController.create)
  .get(garageBusinessHoursController.getAll);

GarageBusinessHoursRoute.route("/:id")
  .get(garageBusinessHoursController.getById)
  .put(garageBusinessHoursController.update)
  .delete(garageBusinessHoursController.delete);

module.exports = GarageBusinessHoursRoute;
