import PricehourRepository from "../repository/pricehour.repository";
import { addpricehours } from "@prisma/client";

class PriceHourService {
  pricehourRepository: PricehourRepository;
  constructor() {
    this.pricehourRepository = new PricehourRepository();
  }

  create = async (data: Omit<addpricehours, "id">): Promise<addpricehours> => {
    return await this.pricehourRepository.create(data);
  };

  getAll = async () => {
    return await this.pricehourRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.pricehourRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<addpricehours, "id">>) => {
    return await this.pricehourRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.pricehourRepository.delete(id);
  };
}

export default PriceHourService;
