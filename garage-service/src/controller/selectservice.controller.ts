// src/controllers/selectServiceController.ts
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import SelectService from "../services/selectservice.service";

class SelectController {
  selectService: SelectService;
  constructor() {
    this.selectService = new SelectService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("inside select service controller");
      const cities = await this.selectService.getAll();
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching select service", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const selectService = await this.selectService.getById(Number(id));
      if (selectService) {
        res.status(200).json(selectService);
      } else {
        res.status(404).json({ message: "Select service not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching select service", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const selectService = await this.selectService.create(req.body);
        res.status(201).json(selectService);
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating select service", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const selectService = await this.selectService.update(
        Number(id),
        req.body
      );
      res.status(200).json(selectService);
    } catch (error) {
      res.status(500).json({ message: "Error updating select service", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.selectService.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting select service", error });
    }
  };
}

export default SelectController;
