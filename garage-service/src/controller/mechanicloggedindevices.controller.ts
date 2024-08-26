// src/controllers/loggedInDeviceController.ts
import { Request, Response } from "express";
import MechanicLoggedInDevicesService from "../services/mechanicloggedindevices.service";

class LoggedInDeviceController {
  mechanicLoggedInDevicesService: MechanicLoggedInDevicesService;
  constructor() {
    this.mechanicLoggedInDevicesService = new MechanicLoggedInDevicesService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const mechanicLoggedIn =
        await this.mechanicLoggedInDevicesService.getAll();
      res.status(200).json(mechanicLoggedIn);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching mechanic logged in", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const loggedInDevice = await this.mechanicLoggedInDevicesService.getById(
        Number(id)
      );
      if (loggedInDevice) {
        res.status(200).json(loggedInDevice);
      } else {
        res.status(404).json({ message: "Mechanic logged in not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching mechanic logged in", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newLoggedIn = await this.mechanicLoggedInDevicesService.create(
        req.body
      );
      res.status(201).json(newLoggedIn);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating mechanic logged in", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedloggedInDevice =
        await this.mechanicLoggedInDevicesService.update(Number(id), req.body);
      res.status(200).json(updatedloggedInDevice);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating logged in device", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.mechanicLoggedInDevicesService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting mechanic logged in", error });
    }
  };
}

export default LoggedInDeviceController;
