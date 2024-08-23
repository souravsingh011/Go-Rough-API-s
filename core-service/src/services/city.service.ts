import CityRepository from "../repository/city.repository";
import { city } from "@prisma/client";

class CityService {
  cityRepository: CityRepository;
  constructor() {
    this.cityRepository = new CityRepository();
  }

  create = async (data: Omit<city, "id">): Promise<city> => {
    return await this.cityRepository.create(data);
  };

  getAll = async () => {
    return await this.cityRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.cityRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<city, "id">>) => {
    return await this.cityRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.cityRepository.delete(id);
  };
}

export default CityService;
