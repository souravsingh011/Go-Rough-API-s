// import { Router } from "express";
// import {
//   getAllStatus,
//   addStatus,
//   getStatus,
//   removeStatus,
//   updateStatus,
// } from "../controller/vehicletype.controller";

// const router = Router();

// router.get("/", getAllStatus);
// router.get("/:id", getStatus);
// router.post("/", addStatus);
// router.put("/:id", updateStatus);
// router.delete("/:id", removeStatus);

// module.exports = router;

import express from "express";
import VehicleTypeController from "../controller/vehicletype.controller";

const VehicleTypeRoute = express.Router();
const vehicleTypeController = new VehicleTypeController();

VehicleTypeRoute.route("/")
  .post(vehicleTypeController.create)
  .get(vehicleTypeController.getAll);

VehicleTypeRoute.route("/:id")
  .get(vehicleTypeController.getById)
  .put(vehicleTypeController.update)
  .delete(vehicleTypeController.delete);

module.exports = VehicleTypeRoute;
