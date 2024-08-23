import LcClassRepository from "../repository/lcclass.repository";
import { lcclass } from "@prisma/client";

class LcClassService {
  lcClassRepository: LcClassRepository;
  constructor() {
    this.lcClassRepository = new LcClassRepository();
  }

  create = async (data: Omit<lcclass, "id">): Promise<lcclass> => {
    return await this.lcClassRepository.create(data);
  };

  getAll = async () => {
    return await this.lcClassRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.lcClassRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<lcclass, "id">>) => {
    return await this.lcClassRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.lcClassRepository.delete(id);
  };
}

export default LcClassService;
