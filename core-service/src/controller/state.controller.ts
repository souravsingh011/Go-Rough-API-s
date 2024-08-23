import { Request, Response } from "express";
import StateService from "../services/state.service";

class StateController {
  stateService: StateService;
  constructor() {
    this.stateService = new StateService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const state = await this.stateService.getAll();
      res.status(200).json(state);
    } catch (error) {
      res.status(500).json({ message: "Error fetching state", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const state = await this.stateService.getById(Number(id));
      if (state) {
        res.status(200).json(state);
      } else {
        res.status(404).json({ message: "state not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching state", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newstate = await this.stateService.create(req.body);
      res.status(201).json(newstate);
    } catch (error) {
      res.status(500).json({ message: "Error creating state", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const upstate = await this.stateService.update(Number(id), req.body);
      res.status(200).json(upstate);
    } catch (error) {
      res.status(500).json({ message: "Error updating state", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.stateService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting state", error });
    }
  };
}

export default StateController;
