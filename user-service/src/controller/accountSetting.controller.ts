import { Request, Response } from "express";
import AccountSettingService from "../services/accountSetting.service";

class AccountSettingController {
  accountSettingService: AccountSettingService;
  constructor() {
    this.accountSettingService = new AccountSettingService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.accountSettingService.getAll();
      res.status(200).json(userSignUP);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching account setting", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.accountSettingService.getById(Number(id));
      if (userSignUP) {
        res.status(200).json(userSignUP);
      } else {
        res.status(404).json({ message: "Account setting not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching user account setting", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.accountSettingService.create(req.body);
      res.status(201).json(userSignUP);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating account setting", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.accountSettingService.update(
        Number(id),
        req.body
      );
      res.status(200).json(userSignUP);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating account setting", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.accountSettingService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting account setting", error });
    }
  };
}

export default AccountSettingController;
