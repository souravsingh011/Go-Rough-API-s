import { state } from "@prisma/client";
import StateRepository from "../repository/state.repository";

class StateService {
  staterRepository: StateRepository;
  constructor() {
    this.staterRepository = new StateRepository();
  }

  create = async (data: Omit<state, "id">): Promise<state> => {
    return await this.staterRepository.create(data);
  };

  getAll = async () => {
    return await this.staterRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.staterRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<state, "id">>) => {
    return await this.staterRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.staterRepository.delete(id);
  };
}

export default StateService;
