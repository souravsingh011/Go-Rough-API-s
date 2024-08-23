import express from "express";
import VehicleColorController from "../controller/vehiclecolor.controller";

const BookingStatusRoute = express.Router();
const vehicleColorController = new VehicleColorController();

BookingStatusRoute.route("/")
  .post(vehicleColorController.create)
  .get(vehicleColorController.getAll);

BookingStatusRoute.route("/:id")
  .get(vehicleColorController.getById)
  .put(vehicleColorController.update)
  .delete(vehicleColorController.delete);

module.exports = BookingStatusRoute;
