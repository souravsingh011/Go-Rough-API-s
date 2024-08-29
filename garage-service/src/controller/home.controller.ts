import { garageInformation } from "@prisma/client";
import { Request, Response } from "express";
import HomeService from "../services/home.service";
import { validationResult } from "express-validator";
class HomeController {
  homeService: HomeService;
  constructor() {
    this.homeService = new HomeService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const home = await this.homeService.getAll();
      res.status(200).json(home);
    } catch (error) {
      res.status(500).json({ message: "Error fetching home", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const home = await this.homeService.getById(Number(id));
      if (home) {
        res.status(200).json(home);
      } else {
        res.status(404).json({ message: "Home not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching home", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const homService = await this.homeService.create(req.body);
        res.status(201).json({ homService });
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating home", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const home = await this.homeService.update(Number(id), req.body);
      res.status(200).json(home);
    } catch (error) {
      res.status(500).json({ message: "Error updating home", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.homeService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting home", error });
    }
  };
}

export default HomeController;
