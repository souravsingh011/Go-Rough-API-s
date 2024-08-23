import { Request, Response } from "express";
import DateService from "../services/data.service";
class DateController {
  dateService: DateService;
  constructor() {
    this.dateService = new DateService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const date = await this.dateService.getAll();
      res.status(200).json(date);
    } catch (error) {
      res.status(500).json({ message: "Error fetching date", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const date = await this.dateService.getById(Number(id));
      if (date) {
        res.status(200).json(date);
      } else {
        res.status(404).json({ message: "Date not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching date", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newdate = await this.dateService.create(req.body);
      res.status(201).json(newdate);
    } catch (error) {
      res.status(500).json({ message: "Error creating date", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedate = await this.dateService.update(Number(id), req.body);
      res.status(200).json(updatedate);
    } catch (error) {
      res.status(500).json({ message: "Error updating date", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.dateService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting date", error });
    }
  };
}
export default DateController;
