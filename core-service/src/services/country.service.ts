import CountryRepository from "../repository/country.repository ";
import { country } from "@prisma/client";

class CountryService {
  countryRepository: CountryRepository;
  constructor() {
    this.countryRepository = new CountryRepository();
  }

  create = async (data: Omit<country, "id">): Promise<country> => {
    return await this.countryRepository.create(data);
  };

  getAll = async () => {
    return await this.countryRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.countryRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<country, "id">>) => {
    return await this.countryRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.countryRepository.delete(id);
  };
}

export default CountryService;
