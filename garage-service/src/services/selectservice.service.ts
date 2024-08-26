import { selectservice } from "@prisma/client";
import SelectServiceRepository from "../repository/selectservice.repository";

class SelectServiceService {
  selectServiceRepository: SelectServiceRepository;
  constructor() {
    this.selectServiceRepository = new SelectServiceRepository();
  }

  create = async (data: Omit<selectservice, "id">): Promise<selectservice> => {
    return await this.selectServiceRepository.create(data);
  };

  getAll = async () => {
    return await this.selectServiceRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.selectServiceRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<selectservice, "id">>) => {
    return await this.selectServiceRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.selectServiceRepository.delete(id);
  };
}

export default SelectServiceService;
