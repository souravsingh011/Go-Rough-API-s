import { Request, Response } from "express";
import ServiceService from "../services/service.service";

class ServiceController {
  serviceService: ServiceService;
  constructor() {
    this.serviceService = new ServiceService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const serviceService = await this.serviceService.getAll();
      res.status(200).json(serviceService);
    } catch (error) {
      res.status(500).json({ message: "Error fetching select service", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const serviceService = await this.serviceService.getById(Number(id));
      if (serviceService) {
        res.status(200).json(serviceService);
      } else {
        res.status(404).json({ message: "Select service not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching Select service", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newserviceService = await this.serviceService.create(req.body);
      res.status(201).json(newserviceService);
    } catch (error) {
      res.status(500).json({ message: "Error creating select service", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedserviceService = await this.serviceService.update(
        Number(id),
        req.body
      );
      res.status(200).json(updatedserviceService);
    } catch (error) {
      res.status(500).json({ message: "Error updating select service", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.serviceService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting select service", error });
    }
  };
}

export default ServiceController;
