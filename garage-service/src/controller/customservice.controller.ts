import { Request, Response } from "express";
import CustomServiceService from "../services/customservice.service";
import { validationResult } from "express-validator";

class CustomServiceController {
  customServiceService: CustomServiceService;
  constructor() {
    this.customServiceService = new CustomServiceService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const customService = await this.customServiceService.getAll();
      res.status(200).json(customService);
    } catch (error) {
      res.status(500).json({ message: "Error fetching custom service", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const customService = await this.customServiceService.getById(Number(id));
      if (customService) {
        res.status(200).json(customService);
      } else {
        res.status(404).json({ message: "Custom service not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching custom service", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const customService = await this.customServiceService.create(req.body);
        res.status(201).json({ customService });
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating custom service", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const customService = await this.customServiceService.update(
        Number(id),
        req.body
      );
      res.status(200).json(customService);
    } catch (error) {
      res.status(500).json({ message: "Error updating customService", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.customServiceService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting custom service", error });
    }
  };
}

export default CustomServiceController;
