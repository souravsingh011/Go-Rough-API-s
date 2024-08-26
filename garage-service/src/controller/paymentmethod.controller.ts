// src/controllers/paymentController.ts
import { Request, Response } from "express";
import PaymentMethodService from "../services/paymentmethod.service";

class PaymentController {
  paymentMethodService: PaymentMethodService;
  constructor() {
    this.paymentMethodService = new PaymentMethodService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const payment = await this.paymentMethodService.getAll();
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ message: "Error fetching payment", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const payment = await this.paymentMethodService.getById(Number(id));
      if (payment) {
        res.status(200).json(payment);
      } else {
        res.status(404).json({ message: "Payment not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching payment", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newpayment = await this.paymentMethodService.create(req.body);
      res.status(201).json(newpayment);
    } catch (error) {
      res.status(500).json({ message: "Error creating payment", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedpayment = await this.paymentMethodService.update(
        Number(id),
        req.body
      );
      res.status(200).json(updatedpayment);
    } catch (error) {
      res.status(500).json({ message: "Error updating payment", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.paymentMethodService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting payment", error });
    }
  };
}

export default PaymentController;
