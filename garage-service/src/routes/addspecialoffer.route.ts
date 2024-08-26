import express from "express";
import AddSpecialOfferController from "../controller/addspecialoffer.controller";

const AddSpecialOfferRoute = express.Router();
const addSpecialOfferController = new AddSpecialOfferController();

AddSpecialOfferRoute.route("/")
  .post(addSpecialOfferController.create)
  .get(addSpecialOfferController.getAll);

AddSpecialOfferRoute.route("/:id")
  .get(addSpecialOfferController.getById)
  .put(addSpecialOfferController.update)
  .delete(addSpecialOfferController.delete);

module.exports = AddSpecialOfferRoute;
