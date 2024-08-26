import { mechanicDetails } from "@prisma/client";
import MechanicDetailsRepository from "../repository/mechanicdetails.repository";

class MechanicDetailsService {
  mechanicDetailsRepository: MechanicDetailsRepository;
  constructor() {
    this.mechanicDetailsRepository = new MechanicDetailsRepository();
  }

  create = async (
    data: Omit<mechanicDetails, "id">
  ): Promise<mechanicDetails> => {
    return await this.mechanicDetailsRepository.create(data);
  };

  getAll = async () => {
    return await this.mechanicDetailsRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.mechanicDetailsRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<mechanicDetails, "id">>) => {
    return await this.mechanicDetailsRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.mechanicDetailsRepository.delete(id);
  };
}

export default MechanicDetailsService;
