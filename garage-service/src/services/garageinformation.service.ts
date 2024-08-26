import { garageInformation } from "@prisma/client";
import GarageInformationRepository from "../repository/garageinformation.repository";

class GarageInformationService {
  garageInformationRepository: GarageInformationRepository;
  constructor() {
    this.garageInformationRepository = new GarageInformationRepository();
  }

  create = async (
    data: Omit<garageInformation, "id">
  ): Promise<garageInformation> => {
    return await this.garageInformationRepository.create(data);
  };

  getAll = async () => {
    return await this.garageInformationRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.garageInformationRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<garageInformation, "id">>) => {
    return await this.garageInformationRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.garageInformationRepository.delete(id);
  };
}

export default GarageInformationService;
