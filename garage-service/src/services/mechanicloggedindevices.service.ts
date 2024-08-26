import { mechanicLoggedInDevices } from "@prisma/client";
import MechanicLoggedInDevicesRepository from "../repository/mechanicloggedindevices.repository";

class MechanicLoggedInDevicesService {
  mechanicLoggedInDevicesRepository: MechanicLoggedInDevicesRepository;
  constructor() {
    this.mechanicLoggedInDevicesRepository =
      new MechanicLoggedInDevicesRepository();
  }

  create = async (
    data: Omit<mechanicLoggedInDevices, "id">
  ): Promise<mechanicLoggedInDevices> => {
    return await this.mechanicLoggedInDevicesRepository.create(data);
  };

  getAll = async () => {
    return await this.mechanicLoggedInDevicesRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.mechanicLoggedInDevicesRepository.getById(id);
  };

  update = async (
    id: number,
    data: Partial<Omit<mechanicLoggedInDevices, "id">>
  ) => {
    return await this.mechanicLoggedInDevicesRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.mechanicLoggedInDevicesRepository.delete(id);
  };
}

export default MechanicLoggedInDevicesService;
