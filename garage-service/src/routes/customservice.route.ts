import express from "express";
import CustomServiceController from "../controller/customservice.controller";

const CustomServiceRoute = express.Router();
const customServiceController = new CustomServiceController();

CustomServiceRoute.route("/")
  .post(customServiceController.create)
  .get(customServiceController.getAll);

CustomServiceRoute.route("/:id")
  .get(customServiceController.getById)
  .put(customServiceController.update)
  .delete(customServiceController.delete);

module.exports = CustomServiceRoute;
