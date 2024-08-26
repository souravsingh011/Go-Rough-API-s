import express from "express";
import ServiceTypeController from "../controller/servicetype.controller";

const ServiceTypeRoute = express.Router();
const serviceTypeController = new ServiceTypeController();

ServiceTypeRoute.route("/")
  .post(serviceTypeController.create)
  .get(serviceTypeController.getAll);

ServiceTypeRoute.route("/:id")
  .get(serviceTypeController.getById)
  .put(serviceTypeController.update)
  .delete(serviceTypeController.delete);

module.exports = ServiceTypeRoute;
