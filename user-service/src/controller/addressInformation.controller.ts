import { Request, Response } from "express";
import AddressInformationService from "../services/addressInformation.service";
import { validationResult } from "express-validator";

class AddressInformationController {
  addressInformationService: AddressInformationService;
  constructor() {
    this.addressInformationService = new AddressInformationService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.addressInformationService.getAll();
      res.status(200).json(userSignUP);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching address information", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.addressInformationService.getById(
        Number(id)
      );
      if (userSignUP) {
        res.status(200).json(userSignUP);
      } else {
        res.status(404).json({ message: "Address information not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching user address information", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const userSignUP = await this.addressInformationService.create(
          req.body
        );
        res.status(201).json(userSignUP);
      } else {
        res.status(422).json({ errors: errors.array() });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating address information", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.addressInformationService.update(
        Number(id),
        req.body
      );
      res.status(200).json(userSignUP);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating address information", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.addressInformationService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting address information", error });
    }
  };
}

export default AddressInformationController;
