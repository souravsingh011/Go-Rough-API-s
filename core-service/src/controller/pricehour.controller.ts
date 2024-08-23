// src/controllers/cityController.ts
import { Request, Response } from "express";
import PriceHourService from "../services/pricehour.service";
class PriceHourController {
  pricehourService: PriceHourService;
  constructor() {
    this.pricehourService = new PriceHourService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const cities = await this.pricehourService.getAll();
      console.log(cities);
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Price & hour", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const city = await this.pricehourService.getById(Number(id));
      if (city) {
        res.status(200).json(city);
      } else {
        res.status(404).json({ message: "Price & hour not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching Price & hour", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newCity = await this.pricehourService.create(req.body);
      res.status(201).json(newCity);
    } catch (error) {
      res.status(500).json({ message: "Error creating Price & hour", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedCity = await this.pricehourService.update(
        Number(id),
        req.body
      );
      res.status(200).json(updatedCity);
    } catch (error) {
      res.status(500).json({ message: "Error updating Price & hour", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.pricehourService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting Price & hour", error });
    }
  };
}
export default PriceHourController;
