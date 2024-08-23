import { vehicleInformation } from "@prisma/client";
import VehicleInformationRepository from "../repository/vehicle.repository";

class VehicleInformationService {
  vehicleInformationRepository: VehicleInformationRepository;
  constructor() {
    this.vehicleInformationRepository = new VehicleInformationRepository();
  }

  create = async (
    data: Omit<vehicleInformation, "id">
  ): Promise<vehicleInformation> => {
    return await this.vehicleInformationRepository.create(data);
  };

  getAll = async () => {
    return await this.vehicleInformationRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.vehicleInformationRepository.getById(id);
  };

  update = async (
    id: number,
    data: Partial<Omit<vehicleInformation, "id">>
  ) => {
    return await this.vehicleInformationRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.vehicleInformationRepository.delete(id);
  };
}

export default VehicleInformationService;
