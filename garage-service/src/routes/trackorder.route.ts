import express from "express";
import OrderController from "../controller/trackorder.controller";

const OrderRoute = express.Router();
const orderController = new OrderController();

OrderRoute.route("/").post(orderController.create).get(orderController.getAll);

OrderRoute.route("/:id")
  .get(orderController.getById)
  .put(orderController.update)
  .delete(orderController.delete);

module.exports = OrderRoute;
