import express from "express";
import PlaceController from "../controller/place.controller";

const PlaceRoute = express.Router();
const placeController = new PlaceController();

PlaceRoute.route("/").post(placeController.create).get(placeController.getAll);

PlaceRoute.route("/:id")
  .get(placeController.getById)
  .put(placeController.update)
  .delete(placeController.delete);

module.exports = PlaceRoute;
