import GarageBusinessHoursRepository from "../repository/garagebusinesshours.repository";
import { garagebusinesshours } from "@prisma/client";

class GarageBusinessHoursService {
  garageBusinessHoursRepository: GarageBusinessHoursRepository;
  constructor() {
    this.garageBusinessHoursRepository = new GarageBusinessHoursRepository();
  }

  create = async (
    data: Omit<garagebusinesshours, "id">
  ): Promise<garagebusinesshours> => {
    return await this.garageBusinessHoursRepository.create(data);
  };

  getAll = async () => {
    return await this.garageBusinessHoursRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.garageBusinessHoursRepository.getById(id);
  };

  update = async (
    id: number,
    data: Partial<Omit<garagebusinesshours, "id">>
  ) => {
    return await this.garageBusinessHoursRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.garageBusinessHoursRepository.delete(id);
  };
}

export default GarageBusinessHoursService;
