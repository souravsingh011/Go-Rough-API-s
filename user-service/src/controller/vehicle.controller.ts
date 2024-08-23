import { Request, Response } from "express";
import VehicleInformationService from "../services/vehicle.service";

class VehicleController {
  vehicleInformationService: VehicleInformationService;
  constructor() {
    this.vehicleInformationService = new VehicleInformationService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.vehicleInformationService.getAll();
      res.status(200).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error fetching vehicle", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.vehicleInformationService.getById(
        Number(id)
      );
      if (userSignUP) {
        res.status(200).json(userSignUP);
      } else {
        res.status(404).json({ message: "Vehicle not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching user vehicle", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.vehicleInformationService.create(req.body);
      res.status(201).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error creating vehicle", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.vehicleInformationService.update(
        Number(id),
        req.body
      );
      res.status(200).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error updating vehicle", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.vehicleInformationService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting vehicle", error });
    }
  };
}

export default VehicleController;
