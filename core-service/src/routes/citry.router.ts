import express from "express";
import CityController from "../controller/city.controller";

const CityRoute = express.Router();
const cityController = new CityController();

CityRoute.route("/").post(cityController.create).get(cityController.getAll);

CityRoute.route("/:id")
  .get(cityController.getById)
  .put(cityController.update)
  .delete(cityController.delete);

module.exports = CityRoute;
