import express from "express";
import SelectController from "../controller/selectservice.controller";
const SelectRoute = express.Router();
const selectController = new SelectController();

SelectRoute.route("/")
  .post(selectController.create)
  .get(selectController.getAll);

SelectRoute.route("/:id")
  .get(selectController.getById)
  .put(selectController.update)
  .delete(selectController.delete);

module.exports = SelectRoute;
