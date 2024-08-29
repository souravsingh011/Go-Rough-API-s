import { Request, Response, NextFunction } from "express";
import AddServiceService from "../services/addservice.service";
import { validationResult } from "express-validator";
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
class AddServiceController {
  addServiceService: AddServiceService;
  constructor() {
    this.addServiceService = new AddServiceService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const addservice = await this.addServiceService.getAll();
      res.status(200).json({ addservice });
    } catch (error) {
      res.status(500).json({ message: "Error fetching add service", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const addService = await this.addServiceService.getById(Number(id));
      if (addService) {
        res.status(200).json(addService);
      } else {
        res.status(404).json({ message: "Add Service not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching addService", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        title,
        checkbox,
        price_hour_id,
        emergency,
        serviceId,
        jwtSecretKey,
      } = req.body;

      let data = {
        title,
        checkbox,
        price_hour_id,
        emergency,
        serviceId,
      };

      const token = jwt.sign(data, jwtSecretKey);

      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const addService = await this.addServiceService.create(req.body);
        res.status(201).json({ addService, token });
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating add Service", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const addService = await this.addServiceService.update(
        Number(id),
        req.body
      );
      res.status(200).json(addService);
    } catch (error) {
      res.status(500).json({ message: "Error updating add Service", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.addServiceService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting add Service", error });
    }
  };

  // Basic example for JWT
  auto = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const title = req.body.title;
    const checkbox = req.body.checkbox;
    const price_hour_id = req.body.price_hour_id;
    const emergency = req.body.emergency;
    const serviceId = req.body.serviceId;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
      title: title,
      checkbox: checkbox,
      price_hour: price_hour_id,
      emergency: emergency,
      serviceId: serviceId,
    };

    const token = jwt.sign(data, jwtSecretKey);
  };
}

export default AddServiceController;
