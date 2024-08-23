import { vehiclecolor } from "@prisma/client";
import VehicleColorRepository from "../repository/vehiclecolor.repository";

class VehicleColorService {
  vehicleColorRepository: VehicleColorRepository;
  constructor() {
    this.vehicleColorRepository = new VehicleColorRepository();
  }

  create = async (data: Omit<vehiclecolor, "id">): Promise<vehiclecolor> => {
    return await this.vehicleColorRepository.create(data);
  };

  getAll = async () => {
    return await this.vehicleColorRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.vehicleColorRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<vehiclecolor, "id">>) => {
    return await this.vehicleColorRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.vehicleColorRepository.delete(id);
  };
}

export default VehicleColorService;
