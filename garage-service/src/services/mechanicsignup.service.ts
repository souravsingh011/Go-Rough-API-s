import { mechanicSignUp } from "@prisma/client";
import MechanicSignUpRepository from "../repository/mechanicsignup.repository";

class MechanicSignUpService {
  mechanicSignUpRepository: MechanicSignUpRepository;
  constructor() {
    this.mechanicSignUpRepository = new MechanicSignUpRepository();
  }

  create = async (
    data: Omit<mechanicSignUp, "id">
  ): Promise<mechanicSignUp> => {
    return await this.mechanicSignUpRepository.create(data);
  };

  getAll = async () => {
    return await this.mechanicSignUpRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.mechanicSignUpRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<mechanicSignUp, "id">>) => {
    return await this.mechanicSignUpRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.mechanicSignUpRepository.delete(id);
  };
}

export default MechanicSignUpService;
