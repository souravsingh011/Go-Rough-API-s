import { customservice } from "@prisma/client";
import CustomServiceRepository from "../repository/customservice.repository";

class CustomServiceService {
  customServiceRepository: CustomServiceRepository;
  constructor() {
    this.customServiceRepository = new CustomServiceRepository();
  }

  create = async (data: Omit<customservice, "id">): Promise<customservice> => {
    return await this.customServiceRepository.create(data);
  };

  getAll = async () => {
    return await this.customServiceRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.customServiceRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<customservice, "id">>) => {
    return await this.customServiceRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.customServiceRepository.delete(id);
  };
}

export default CustomServiceService;
