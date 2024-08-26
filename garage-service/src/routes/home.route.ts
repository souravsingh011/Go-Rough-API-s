import express from "express";
import HomeController from "../controller/home.controller";

const HomeRoute = express.Router();
const homeController = new HomeController();

HomeRoute.route("/").post(homeController.create).get(homeController.getAll);

HomeRoute.route("/:id")
  .get(homeController.getById)
  .put(homeController.update)
  .delete(homeController.delete);

module.exports = HomeRoute;
