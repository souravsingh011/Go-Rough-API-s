// src/controllers/serviceIncludeController.ts
import { Request, Response } from "express";
import ServiceIncludesService from "../services/serviceincludes.service";

class ServiceIncludeController {
  serviceIncludesService: ServiceIncludesService;
  constructor() {
    this.serviceIncludesService = new ServiceIncludesService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const cities = await this.serviceIncludesService.getAll();
      res.status(200).json(cities);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching service include", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const serviceInclude = await this.serviceIncludesService.getById(
        Number(id)
      );
      if (serviceInclude) {
        res.status(200).json(serviceInclude);
      } else {
        res.status(404).json({ message: "Service include not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching service include", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const serviceInclude = await this.serviceIncludesService.create(req.body);
      res.status(201).json(serviceInclude);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating service include", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const serviceInclude = await this.serviceIncludesService.update(
        Number(id),
        req.body
      );
      res.status(200).json(serviceInclude);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating service include", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.serviceIncludesService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting service include", error });
    }
  };
}

export default ServiceIncludeController;
