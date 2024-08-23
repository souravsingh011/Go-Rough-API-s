import { vehicletype } from "@prisma/client";
import VehicleTypeRepository from "../repository/vehicletype.repository";

class VehicleTypeService {
  vehicleTypeRepository: VehicleTypeRepository;
  constructor() {
    this.vehicleTypeRepository = new VehicleTypeRepository();
  }

  create = async (data: Omit<vehicletype, "id">): Promise<vehicletype> => {
    return await this.vehicleTypeRepository.create(data);
  };

  getAll = async () => {
    return await this.vehicleTypeRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.vehicleTypeRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<vehicletype, "id">>) => {
    return await this.vehicleTypeRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.vehicleTypeRepository.delete(id);
  };
}

export default VehicleTypeService;
