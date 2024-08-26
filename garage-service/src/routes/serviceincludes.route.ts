import express from "express";
import ServiceIncludeController from "../controller/serviceincludes.controller";

const ServiceIncludeRoute = express.Router();
const serviceIncludeController = new ServiceIncludeController();

ServiceIncludeRoute.route("/")
  .post(serviceIncludeController.create)
  .get(serviceIncludeController.getAll);

ServiceIncludeRoute.route("/:id")
  .get(serviceIncludeController.getById)
  .put(serviceIncludeController.update)
  .delete(serviceIncludeController.delete);

module.exports = ServiceIncludeRoute;
