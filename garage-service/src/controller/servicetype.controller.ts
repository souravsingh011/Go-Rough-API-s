// src/controllers/cityTypeController.ts
import { Request, Response } from "express";
import ServiceTypeService from "../services/servicetype.service";
import { validationResult } from "express-validator";

class ServiceTypeController {
  serviceTypeService: ServiceTypeService;
  constructor() {
    this.serviceTypeService = new ServiceTypeService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const serviceType = await this.serviceTypeService.getAll();
      res.status(200).json(serviceType);
    } catch (error) {
      res.status(500).json({ message: "Error fetching serviceType", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const cityType = await this.serviceTypeService.getById(Number(id));
      if (cityType) {
        res.status(200).json(cityType);
      } else {
        res.status(404).json({ message: "Service type not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching cityType", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const cityType = await this.serviceTypeService.create(req.body);
        res.status(201).json(cityType);
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating city type", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const cityType = await this.serviceTypeService.update(
        Number(id),
        req.body
      );
      res.status(200).json(cityType);
    } catch (error) {
      res.status(500).json({ message: "Error updating city type", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.serviceTypeService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting city type", error });
    }
  };
}

export default ServiceTypeController;
