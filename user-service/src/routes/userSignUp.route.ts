import express from "express";
import UserSignUpController from "../controller/userSignUp.controller";

const UserSignUpRoute = express.Router();
const userSignUpController = new UserSignUpController();

UserSignUpRoute.route("/")
  .post(userSignUpController.create)
  .get(userSignUpController.getAll);

UserSignUpRoute.route("/:id")
  .get(userSignUpController.getById)
  .put(userSignUpController.update)
  .delete(userSignUpController.delete);

export default UserSignUpRoute;
