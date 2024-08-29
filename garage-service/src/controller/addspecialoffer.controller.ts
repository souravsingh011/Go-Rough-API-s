import { addSpecialOffer } from "@prisma/client";
import { Request, Response } from "express";
import AddSpecialOfferService from "../services/addspecialoffer.service";
import { validationResult } from "express-validator";

class AddSpecialOfferController {
  addSpecialOfferService: AddSpecialOfferService;
  constructor() {
    this.addSpecialOfferService = new AddSpecialOfferService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const cities = await this.addSpecialOfferService.getAll();
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cities", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const city = await this.addSpecialOfferService.getById(Number(id));
      if (city) {
        res.status(200).json(city);
      } else {
        res.status(404).json({ message: "City not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching city", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const addSpecialOfferService = await this.addSpecialOfferService.create(
          req.body
        );
        res.status(201).json({ addSpecialOfferService });
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating city", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const city = await this.addSpecialOfferService.update(
        Number(id),
        req.body
      );
      res.status(200).json(city);
    } catch (error) {
      res.status(500).json({ message: "Error updating city", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.addSpecialOfferService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting city", error });
    }
  };
}

export default AddSpecialOfferController;
