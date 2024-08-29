import { selectservice } from "@prisma/client";
import SelectRepository from "../repository/selectservice.repository";

class SelectService {
  selectRepository: SelectRepository;
  constructor() {
    this.selectRepository = new SelectRepository();
  }

  create = async (data: Omit<selectservice, "id">): Promise<selectservice> => {
    return await this.selectRepository.create(data);
  };

  getAll = async () => {
    console.log("select service service");
    return await this.selectRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.selectRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<selectservice, "id">>) => {
    return await this.selectRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.selectRepository.delete(id);
  };
}

export default SelectService;
