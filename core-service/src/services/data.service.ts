import DateRepository from "../repository/date.repository";
import { date } from "@prisma/client";

class DateService {
  dateRepository: DateRepository;
  constructor() {
    this.dateRepository = new DateRepository();
  }

  create = async (data: Omit<date, "id">): Promise<date> => {
    return await this.dateRepository.create(data);
  };

  getAll = async () => {
    return await this.dateRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.dateRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<date, "id">>) => {
    return await this.dateRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.dateRepository.delete(id);
  };
}

export default DateService;
