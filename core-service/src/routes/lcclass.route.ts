import express from "express";
import LcClassController from "../controller/lcclass.controller";

const LcClassRoute = express.Router();
const lcClassController = new LcClassController();

LcClassRoute.route("/")
  .post(lcClassController.create)
  .get(lcClassController.getAll);

LcClassRoute.route("/:id")
  .get(lcClassController.getById)
  .put(lcClassController.update)
  .delete(lcClassController.delete);

module.exports = LcClassRoute;
