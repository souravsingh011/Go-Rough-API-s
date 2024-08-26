import BookingStatusRepository from "../repository/bookingstatus.repository";
import { bookingstatus } from "@prisma/client";

class BookingStatusService {
  bookingStatusRepository: BookingStatusRepository;
  constructor() {
    this.bookingStatusRepository = new BookingStatusRepository();
  }

  create = async (data: Omit<bookingstatus, "id">): Promise<bookingstatus> => {
    return await this.bookingStatusRepository.create(data);
  };

  getAll = async () => {
    return await this.bookingStatusRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.bookingStatusRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<bookingstatus, "id">>) => {
    return await this.bookingStatusRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.bookingStatusRepository.delete(id);
  };
}

export default BookingStatusService;
