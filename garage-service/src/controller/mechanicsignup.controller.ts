// src/controllers/signUpController.ts
import { Request, Response } from "express";
import MechanicSignUpService from "../services/mechanicsignup.service";
import { ValidationError } from "express-validation";
import { validationResult } from "express-validator";

class MechanicSignUpController {
  mechanicSignUpService: MechanicSignUpService;
  constructor() {
    this.mechanicSignUpService = new MechanicSignUpService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const signUp = await this.mechanicSignUpService.getAll();
      res.status(200).json(signUp);
    } catch (error) {
      res.status(500).json({ message: "Error fetching sign up", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const signUp = await this.mechanicSignUpService.getById(Number(id));
      if (signUp) {
        res.status(200).json(signUp);
      } else {
        res.status(404).json({ message: "Sign up not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching sign up", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const signUp = await this.mechanicSignUpService.create(req.body);
        res.status(201).json(signUp);
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating signUp", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const signUp = await this.mechanicSignUpService.update(
        Number(id),
        req.body
      );
      res.status(200).json(signUp);
    } catch (error) {
      res.status(500).json({ message: "Error updating sign up", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.mechanicSignUpService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting sign  up", error });
    }
  };
}

export default MechanicSignUpController;
