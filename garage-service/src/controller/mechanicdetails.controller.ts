import { Request, Response } from "express";
import MechanicDetailsService from "../services/mechanicdetails.service";

class MechanicDetailsController {
  mechanicDetailsService: MechanicDetailsService;
  constructor() {
    this.mechanicDetailsService = new MechanicDetailsService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const mechanicDetails = await this.mechanicDetailsService.getAll();
      res.status(200).json(mechanicDetails);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching mechanic details", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const mechanicDetails = await this.mechanicDetailsService.getById(
        Number(id)
      );
      if (mechanicDetails) {
        res.status(200).json(mechanicDetails);
      } else {
        res.status(404).json({ message: "Mechanic details not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching mechanic details", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const mechanicDetails = await this.mechanicDetailsService.create(
        req.body
      );
      res.status(201).json(mechanicDetails);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating mechanic details", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedmechanicDetails = await this.mechanicDetailsService.update(
        Number(id),
        req.body
      );
      res.status(200).json(updatedmechanicDetails);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating mechanicDetails", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.mechanicDetailsService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting mechanic details", error });
    }
  };
}

export default MechanicDetailsController;
