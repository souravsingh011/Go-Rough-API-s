import express from "express";
import StateController from "../controller/state.controller";

const StateRoute = express.Router();
const stateController = new StateController();

StateRoute.route("/").post(stateController.create).get(stateController.getAll);

StateRoute.route("/:id")
  .get(stateController.getById)
  .put(stateController.update)
  .delete(stateController.delete);

module.exports = StateRoute;
