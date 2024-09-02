import { Request, Response, NextFunction } from "express";
import AddServiceService from "../services/addservice.service";
import { validationResult } from "express-validator";

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
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const addService = await this.addServiceService.create(req.body);
        res.status(201).json({ addService });
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
}

export default AddServiceController;
