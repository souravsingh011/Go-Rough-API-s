import { Request, Response } from "express";
import PlaceService from "../services/place.service";

class PlaceController {
  placeService: PlaceService;
  constructor() {
    this.placeService = new PlaceService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const place = await this.placeService.getAll();
      res.status(200).json(place);
    } catch (error) {
      res.status(500).json({ message: "Error fetching place", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const place = await this.placeService.getById(Number(id));
      if (place) {
        res.status(200).json(place);
      } else {
        res.status(404).json({ message: "place not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching place", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const place = await this.placeService.create(req.body);
      res.status(201).json(place);
    } catch (error) {
      res.status(500).json({ message: "Error creating place", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const place = await this.placeService.update(Number(id), req.body);
      res.status(200).json(place);
    } catch (error) {
      res.status(500).json({ message: "Error updating place", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.placeService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting place", error });
    }
  };
}

export default PlaceController;
