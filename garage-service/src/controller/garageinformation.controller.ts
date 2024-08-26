import { Request, Response } from "express";
import GarageInformationService from "../services/garageinformation.service";

class GarageInformationController {
  garageInformationService: GarageInformationService;
  constructor() {
    this.garageInformationService = new GarageInformationService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const garageInformation = await this.garageInformationService.getAll();
      res.status(200).json(garageInformation);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching garage information", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const garageInformation = await this.garageInformationService.getById(
        Number(id)
      );
      if (garageInformation) {
        res.status(200).json(garageInformation);
      } else {
        res.status(404).json({ message: "Garage information not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching garage information", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newGarageInformation = await this.garageInformationService.create(
        req.body
      );
      res.status(201).json(newGarageInformation);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating garage information", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedgarageInformation =
        await this.garageInformationService.update(Number(id), req.body);
      res.status(200).json(updatedgarageInformation);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating garage information", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.garageInformationService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting garage information", error });
    }
  };
}

export default GarageInformationController;
