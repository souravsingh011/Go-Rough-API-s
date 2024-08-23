import express from "express";
import PaymentController from "../controller/payment.controller";

const PaymentRoute = express.Router();
const paymentController = new PaymentController();

PaymentRoute.route("/")
  .post(paymentController.create)
  .get(paymentController.getAll);

PaymentRoute.route("/:id")
  .get(paymentController.getById)
  .put(paymentController.update)
  .delete(paymentController.delete);

export default PaymentRoute;
