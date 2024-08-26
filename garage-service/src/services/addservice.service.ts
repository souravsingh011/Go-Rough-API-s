import { addservice } from "@prisma/client";
import AddserviceRepository from "../repository/addservice.repository";

class AddServiceService {
  addserviceRepository: AddserviceRepository;
  constructor() {
    this.addserviceRepository = new AddserviceRepository();
  }

  create = async (data: Omit<addservice, "id">): Promise<addservice> => {
    return await this.addserviceRepository.create(data);
  };

  getAll = async () => {
    return await this.addserviceRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.addserviceRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<addservice, "id">>) => {
    return await this.addserviceRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.addserviceRepository.delete(id);
  };
}

export default AddServiceService;
