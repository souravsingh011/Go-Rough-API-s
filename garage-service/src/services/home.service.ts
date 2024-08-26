import HomeRepository from "../repository/home.repository";
import { home } from "@prisma/client";

class HomeService {
  homeRepository: HomeRepository;
  constructor() {
    this.homeRepository = new HomeRepository();
  }

  create = async (data: Omit<home, "id">): Promise<home> => {
    return await this.homeRepository.create(data);
  };

  getAll = async () => {
    return await this.homeRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.homeRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<home, "id">>) => {
    return await this.homeRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.homeRepository.delete(id);
  };
}

export default HomeService;
