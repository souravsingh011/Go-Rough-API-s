import express from "express";
import VehicleModelController from "../controller/vehiclemodel.controller";

const VehicleModelRoute = express.Router();
const vehicleModelController = new VehicleModelController();

VehicleModelRoute.route("/")
  .post(vehicleModelController.create)
  .get(vehicleModelController.getAll);

VehicleModelRoute.route("/:id")
  .get(vehicleModelController.getById)
  .put(vehicleModelController.update)
  .delete(vehicleModelController.delete);

module.exports = VehicleModelRoute;
