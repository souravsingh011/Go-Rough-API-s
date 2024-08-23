import express from "express";
import VehicleController from "../controller/vehicle.controller";

const VehicleRoute = express.Router();
const vehicleController = new VehicleController();

VehicleRoute.route("/")
  .post(vehicleController.create)
  .get(vehicleController.getAll);

VehicleRoute.route("/:id")
  .get(vehicleController.getById)
  .put(vehicleController.update)
  .delete(vehicleController.delete);

export default VehicleRoute;
