import express from "express";
import AddressInformationController from "../controller/addressInformation.controller";

const AddressInformationRoute = express.Router();
const addressInformationController = new AddressInformationController();

AddressInformationRoute.route("/")
  .post(addressInformationController.create)
  .get(addressInformationController.getAll);

AddressInformationRoute.route("/:id")
  .get(addressInformationController.getById)
  .put(addressInformationController.update)
  .delete(addressInformationController.delete);

export default AddressInformationRoute;
