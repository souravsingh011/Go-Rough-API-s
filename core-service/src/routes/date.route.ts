import express from "express";
import DateController from "../controller/date.controller";

const DateRoute = express.Router();
const dateController = new DateController();

DateRoute.route("/").post(dateController.create).get(dateController.getAll);

DateRoute.route("/:id")
  .get(dateController.getById)
  .put(dateController.update)
  .delete(dateController.delete);

module.exports = DateRoute;
