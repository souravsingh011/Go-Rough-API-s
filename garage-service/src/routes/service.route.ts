import express from "express";
import BookingStatusController from "../controller/bookingstatus.controller";

const BookingStatusRoute = express.Router();
const bookingStatusController = new BookingStatusController();

BookingStatusRoute.route("/")
  .post(bookingStatusController.create)
  .get(bookingStatusController.getAll);

BookingStatusRoute.route("/:id")
  .get(bookingStatusController.getById)
  .put(bookingStatusController.update)
  .delete(bookingStatusController.delete);

module.exports = BookingStatusRoute;
