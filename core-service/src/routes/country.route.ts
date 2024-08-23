import express from "express";
import CountryController from "../controller/country.controller";

const CountryRoute = express.Router();
const countryController = new CountryController();

CountryRoute.route("/")
  .post(countryController.create)
  .get(countryController.getAll);

CountryRoute.route("/:id")
  .get(countryController.getById)
  .put(countryController.update)
  .delete(countryController.delete);

module.exports = CountryRoute;
