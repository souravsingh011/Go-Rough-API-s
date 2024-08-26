import express from "express";
import MechanicDetailsController from "../controller/mechanicdetails.controller";

const MechanicDetailsRoute = express.Router();
const mechanicDetailsController = new MechanicDetailsController();

MechanicDetailsRoute.route("/")
  .post(mechanicDetailsController.create)
  .get(mechanicDetailsController.getAll);

MechanicDetailsRoute.route("/:id")
  .get(mechanicDetailsController.getById)
  .put(mechanicDetailsController.update)
  .delete(mechanicDetailsController.delete);

module.exports = MechanicDetailsRoute;
