import express from "express";
import ServiceController from "../controller/service.controller";

const ServicesRoute = express.Router();
const serviceController = new ServiceController();

ServicesRoute.route("/")
  .post(serviceController.create)
  .get(serviceController.getAll);

ServicesRoute.route("/:id")
  .get(serviceController.getById)
  .put(serviceController.update)
  .delete(serviceController.delete);

module.exports = ServicesRoute;
