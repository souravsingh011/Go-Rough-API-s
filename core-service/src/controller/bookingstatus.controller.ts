// src/controllers/bookingstatusController.ts
import { Request, Response } from "express";
import BookingStatusService from "../services/bookingstatus.service";

class BookingStatusController {
  bookingStatusService: BookingStatusService;
  constructor() {
    this.bookingStatusService = new BookingStatusService();
  }
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const bookstatus = await this.bookingStatusService.getAll();
      res.status(200).json(bookstatus);
    } catch (error) {
      res.status(500).json({ message: "Error fetching book status", error });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const bookingstatus = await this.bookingStatusService.getById(Number(id));
      if (bookingstatus) {
        res.status(200).json(bookingstatus);
      } else {
        res.status(404).json({ message: "Booking status not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching booking status", error });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newbookingstatus = await this.bookingStatusService.create(req.body);
      res.status(201).json(newbookingstatus);
    } catch (error) {
      res.status(500).json({ message: "Error creating bookingstatus", error });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedbookingstatus = await this.bookingStatusService.update(
        Number(id),
        req.body
      );
      res.status(200).json(updatedbookingstatus);
    } catch (error) {
      res.status(500).json({ message: "Error updating booking status", error });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.bookingStatusService.delete(Number(id));
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: "Error deleting bookings tatus", error });
    }
  };
}

export default BookingStatusController;
