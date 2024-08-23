import { vehiclemodel } from "@prisma/client";
import VehicleModelRepository from "../repository/vehiclemodel.repository";

class VehicleModelService {
  vehicleModelRepository: VehicleModelRepository;
  constructor() {
    this.vehicleModelRepository = new VehicleModelRepository();
  }

  create = async (data: Omit<vehiclemodel, "id">): Promise<vehiclemodel> => {
    return await this.vehicleModelRepository.create(data);
  };

  getAll = async () => {
    return await this.vehicleModelRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.vehicleModelRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<vehiclemodel, "id">>) => {
    return await this.vehicleModelRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.vehicleModelRepository.delete(id);
  };
}

export default VehicleModelService;
