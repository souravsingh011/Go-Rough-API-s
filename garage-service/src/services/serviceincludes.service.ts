import { serviceIncludes } from "@prisma/client";
import ServiceIncludesRepository from "../repository/serviceincludes.repository";

class ServiceIncludesService {
  serviceIncludesRepository: ServiceIncludesRepository;
  constructor() {
    this.serviceIncludesRepository = new ServiceIncludesRepository();
  }

  create = async (
    data: Omit<serviceIncludes, "id">
  ): Promise<serviceIncludes> => {
    return await this.serviceIncludesRepository.create(data);
  };

  getAll = async () => {
    return await this.serviceIncludesRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.serviceIncludesRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<serviceIncludes, "id">>) => {
    return await this.serviceIncludesRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.serviceIncludesRepository.delete(id);
  };
}

export default ServiceIncludesService;
