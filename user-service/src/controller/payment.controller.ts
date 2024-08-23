import { Request, Response } from "express";
import PaymentService from "../services/payment.service";

class PaymentController {
  paymentService: PaymentService;
  constructor() {
    this.paymentService = new PaymentService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.paymentService.getAll();
      res.status(200).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error fetching payment", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.paymentService.getById(Number(id));
      if (userSignUP) {
        res.status(200).json(userSignUP);
      } else {
        res.status(404).json({ message: "Payment not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching user payment", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const userSignUP = await this.paymentService.create(req.body);
      res.status(201).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error creating payment", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const userSignUP = await this.paymentService.update(Number(id), req.body);
      res.status(200).json(userSignUP);
    } catch (error) {
      res.status(500).json({ message: "Error updating payment", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.paymentService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting payment", error });
    }
  };
}

export default PaymentController;
