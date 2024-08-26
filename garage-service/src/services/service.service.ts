import { service } from "@prisma/client";
import ServiceRepository from "../repository/service.repository";

class ServiceService {
  serviceRepository: ServiceRepository;
  constructor() {
    this.serviceRepository = new ServiceRepository();
  }

  create = async (data: Omit<service, "id">): Promise<service> => {
    return await this.serviceRepository.create(data);
  };

  getAll = async () => {
    return await this.serviceRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.serviceRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<service, "id">>) => {
    return await this.serviceRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.serviceRepository.delete(id);
  };
}

export default ServiceService;
