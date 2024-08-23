// src/controllers/countryController.ts
import { Request, Response } from "express";
import CountryService from "../services/country.service";

class CountryController {
  countryService: CountryService;
  constructor() {
    this.countryService = new CountryService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const country = await this.countryService.getAll();
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ message: "Error fetching country", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const country = await this.countryService.getById(Number(id));
      if (country) {
        res.status(200).json(country);
      } else {
        res.status(404).json({ message: "Country not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching country", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newcountry = await this.countryService.create(req.body);
      res.status(201).json(newcountry);
    } catch (error) {
      res.status(500).json({ message: "Error creating country", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedcountry = await this.countryService.update(
        Number(id),
        req.body
      );
      res.status(200).json(updatedcountry);
    } catch (error) {
      res.status(500).json({ message: "Error updating country", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.countryService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting country", error });
    }
  };
}

export default CountryController;
