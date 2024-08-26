import express from "express";
import AddServiceController from "../controller/addservice.controller";

const AddServiceRoute = express.Router();
const addServiceController = new AddServiceController();

AddServiceRoute.route("/")
  .post(addServiceController.create)
  .get(addServiceController.getAll);

AddServiceRoute.route("/:id")
  .get(addServiceController.getById)
  .put(addServiceController.update)
  .delete(addServiceController.delete);

module.exports = AddServiceRoute;
