import { Request, Response } from "express";
import LcClassService from "../services/lcclass.service";

class LcClassController {
  lcClassService: LcClassService;
  constructor() {
    this.lcClassService = new LcClassService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const lc = await this.lcClassService.getAll();
      res.status(200).json(lc);
    } catch (error) {
      res.status(500).json({ message: "Error fetching lc", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const lc = await this.lcClassService.getById(Number(id));
      if (lc) {
        res.status(200).json(lc);
      } else {
        res.status(404).json({ message: "Lc not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching lc", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newlc = await this.lcClassService.create(req.body);
      res.status(201).json(newlc);
    } catch (error) {
      res.status(500).json({ message: "Error creating lc", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const uplc = await this.lcClassService.update(Number(id), req.body);
      res.status(200).json(uplc);
    } catch (error) {
      res.status(500).json({ message: "Error updating lc", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.lcClassService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting lc", error });
    }
  };
}

export default LcClassController;
