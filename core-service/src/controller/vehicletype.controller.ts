import { Request, Response } from "express";
import VehicleTypeService from "../services/vehicletype.service";

class VehicleTypeController {
  vehicleTypeService: VehicleTypeService;
  constructor() {
    this.vehicleTypeService = new VehicleTypeService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const vehicletype = await this.vehicleTypeService.getAll();
      res.status(200).json(vehicletype);
    } catch (error) {
      res.status(500).json({ message: "Error fetching vehicle type", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const vehicletype = await this.vehicleTypeService.getById(Number(id));
      if (vehicletype) {
        res.status(200).json(vehicletype);
      } else {
        res.status(404).json({ message: "Vehicle type not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching vehicletype", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newvehicletype = await this.vehicleTypeService.create(req.body);
      res.status(201).json(newvehicletype);
    } catch (error) {
      res.status(500).json({ message: "Error creating vehicle type", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const upvehicletype = await this.vehicleTypeService.update(
        Number(id),
        req.body
      );
      res.status(200).json(upvehicletype);
    } catch (error) {
      res.status(500).json({ message: "Error updating vehicle type", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.vehicleTypeService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting vehicle type", error });
    }
  };
}

export default VehicleTypeController;
