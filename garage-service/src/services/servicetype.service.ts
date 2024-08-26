import { serviceType } from "@prisma/client";
import ServiceTypeRepository from "../repository/servicetype.repository";

class ServiceTypeService {
  serviceTypeRepository: ServiceTypeRepository;
  constructor() {
    this.serviceTypeRepository = new ServiceTypeRepository();
  }

  create = async (data: Omit<serviceType, "id">): Promise<serviceType> => {
    return await this.serviceTypeRepository.create(data);
  };

  getAll = async () => {
    return await this.serviceTypeRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.serviceTypeRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<serviceType, "id">>) => {
    return await this.serviceTypeRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.serviceTypeRepository.delete(id);
  };
}

export default ServiceTypeService;
