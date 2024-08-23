import { Request, Response } from "express";
import VehicleColorService from "../services/vehiclecolor.service";

class VehicleColorController {
  vehicleColorService: VehicleColorService;
  constructor() {
    this.vehicleColorService = new VehicleColorService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const vehiclecolor = await this.vehicleColorService.getAll();
      res.status(200).json(vehiclecolor);
    } catch (error) {
      res.status(500).json({ message: "Error fetching vehicle color", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const vehiclecolor = await this.vehicleColorService.getById(Number(id));
      if (vehiclecolor) {
        res.status(200).json(vehiclecolor);
      } else {
        res.status(404).json({ message: "Vehicle color not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching vehicle color", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newvehiclecolor = await this.vehicleColorService.create(req.body);
      res.status(201).json(newvehiclecolor);
    } catch (error) {
      res.status(500).json({ message: "Error creating vehiclecolor", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const upvehiclecolor = await this.vehicleColorService.update(
        Number(id),
        req.body
      );
      res.status(200).json(upvehiclecolor);
    } catch (error) {
      res.status(500).json({ message: "Error updating vehiclecolor", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.vehicleColorService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting vehiclecolor", error });
    }
  };
}

export default VehicleColorController;
