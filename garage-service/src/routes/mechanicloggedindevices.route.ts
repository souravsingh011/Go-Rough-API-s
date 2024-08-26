import express from "express";
import LoggedInDeviceController from "../controller/mechanicloggedindevices.controller";

const LoggedInDeviceRoute = express.Router();
const loggedInDeviceController = new LoggedInDeviceController();

LoggedInDeviceRoute.route("/")
  .post(loggedInDeviceController.create)
  .get(loggedInDeviceController.getAll);

LoggedInDeviceRoute.route("/:id")
  .get(loggedInDeviceController.getById)
  .put(loggedInDeviceController.update)
  .delete(loggedInDeviceController.delete);

module.exports = LoggedInDeviceRoute;
