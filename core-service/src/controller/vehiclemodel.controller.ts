import { Request, Response } from "express";
import VehicleModelService from "../services/vehiclemodel.service";
class VehicleModelController {
  vehicleModelService: VehicleModelService;
  constructor() {
    this.vehicleModelService = new VehicleModelService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const vehiclemodel = await this.vehicleModelService.getAll();
      res.status(200).json(vehiclemodel);
    } catch (error) {
      res.status(500).json({ message: "Error fetching vehicle model", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const vehiclemodel = await this.vehicleModelService.getById(Number(id));
      if (vehiclemodel) {
        res.status(200).json(vehiclemodel);
      } else {
        res.status(404).json({ message: "Vehicle model not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching vehicle model", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const vewVehiclemodel = await this.vehicleModelService.create(req.body);
      res.status(201).json(vewVehiclemodel);
    } catch (error) {
      res.status(500).json({ message: "Error creating vehicle model", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const vpVehiclemodel = await this.vehicleModelService.update(
        Number(id),
        req.body
      );
      res.status(200).json(vpVehiclemodel);
    } catch (error) {
      res.status(500).json({ message: "Error updating vehiclemodel", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.vehicleModelService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting vehiclemodel", error });
    }
  };
}

export default VehicleModelController;
