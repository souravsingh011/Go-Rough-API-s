import { Request, Response } from "express";
import TrackOrderService from "../services/trackorder.service";

class OrderController {
  trackOrderService: TrackOrderService;
  constructor() {
    this.trackOrderService = new TrackOrderService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const order = await this.trackOrderService.getAll();
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: "Error fetching order", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const order = await this.trackOrderService.getById(Number(id));
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching order", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const order = await this.trackOrderService.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: "Error creating order", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const order = await this.trackOrderService.update(Number(id), req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: "Error updating order", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.trackOrderService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting order", error });
    }
  };
}

export default OrderController;
