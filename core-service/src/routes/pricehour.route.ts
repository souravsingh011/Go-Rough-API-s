import express from "express";
import PriceHourController from "../controller/pricehour.controller";

const PriceHourRoute = express.Router();
const priceHourController = new PriceHourController();

PriceHourRoute.route("/")
  .post(priceHourController.create)
  .get(priceHourController.getAll);

PriceHourRoute.route("/:id")
  .get(priceHourController.getById)
  .put(priceHourController.update)
  .delete(priceHourController.delete);

module.exports = PriceHourRoute;
