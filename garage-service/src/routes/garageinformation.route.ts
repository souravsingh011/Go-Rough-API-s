import express from "express";
import GarageInformationController from "../controller/garageinformation.controller";

const GarageInformationSRoute = express.Router();
const garageInformationSController = new GarageInformationController();

GarageInformationSRoute.route("/")
  .post(garageInformationSController.create)
  .get(garageInformationSController.getAll);

GarageInformationSRoute.route("/:id")
  .get(garageInformationSController.getById)
  .put(garageInformationSController.update)
  .delete(garageInformationSController.delete);

module.exports = GarageInformationSRoute;
