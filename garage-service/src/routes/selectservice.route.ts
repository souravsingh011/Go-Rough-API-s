import express from "express";
import SelectServiceController from "../controller/service.controller";

const SelectServiceRoute = express.Router();
const selectServiceController = new SelectServiceController();

SelectServiceRoute.route("/")
  .post(selectServiceController.create)
  .get(selectServiceController.getAll);

SelectServiceRoute.route("/:id")
  .get(selectServiceController.getById)
  .put(selectServiceController.update)
  .delete(selectServiceController.delete);

module.exports = SelectServiceRoute;
