// src/controllers/userSignUPController.ts
import { Request, Response } from "express";
import UserSignUpService from "../services/userSignUp.service";

class UserSignUpController {
  userSignUpService: UserSignUpService;
  constructor() {
    this.userSignUpService = new UserSignUpService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.userSignUpService.getAll();
      res.status(200).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error fetching book status", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.userSignUpService.getById(Number(id));
      if (userSignUP) {
        res.status(200).json(userSignUP);
      } else {
        res.status(404).json({ message: "User sign up status not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching user sign up status", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.userSignUpService.create(req.body);
      res.status(201).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error creating user sign up", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.userSignUpService.update(
        Number(id),
        req.body
      );
      res.status(200).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error updating user sign up", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.userSignUpService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting user sign up", error });
    }
  };
}

export default UserSignUpController;
