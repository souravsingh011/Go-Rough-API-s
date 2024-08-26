import express from "express";
import MechanicSignUpController from "../controller/mechanicsignup.controller";

const MechanicSignUpRoute = express.Router();
const mechanicSignUpController = new MechanicSignUpController();

MechanicSignUpRoute.route("/")
  .post(mechanicSignUpController.create)
  .get(mechanicSignUpController.getAll);

MechanicSignUpRoute.route("/:id")
  .get(mechanicSignUpController.getById)
  .put(mechanicSignUpController.update)
  .delete(mechanicSignUpController.delete);

module.exports = MechanicSignUpRoute;
