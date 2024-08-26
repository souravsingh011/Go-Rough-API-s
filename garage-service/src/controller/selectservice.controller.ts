// src/controllers/selectServiceController.ts
import { Request, Response } from "express";
import SelectServiceService from "../services/selectservice.service";

class SelectServiceController {
  selectServiceService: SelectServiceService;
  constructor() {
    this.selectServiceService = new SelectServiceService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const cities = await this.selectServiceService.getAll();
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching select service", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const selectService = await this.selectServiceService.getById(Number(id));
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
      const newselectService = await this.selectServiceService.create(req.body);
      res.status(201).json(newselectService);
    } catch (error) {
      res.status(500).json({ message: "Error creating select service", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedselectService = await this.selectServiceService.update(
        Number(id),
        req.body
      );
      res.status(200).json(updatedselectService);
    } catch (error) {
      res.status(500).json({ message: "Error updating select service", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.selectServiceService.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting select service", error });
    }
  };
}

export default SelectServiceController;
