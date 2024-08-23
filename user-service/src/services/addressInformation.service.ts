import { addressInformation } from "@prisma/client";
import AddressInformationRepository from "../repository/addressInformation.repository";

class AddressInformationService {
  addressInformationRepository: AddressInformationRepository;
  constructor() {
    this.addressInformationRepository = new AddressInformationRepository();
  }

  create = async (
    data: Omit<addressInformation, "id">
  ): Promise<addressInformation> => {
    return await this.addressInformationRepository.create(data);
  };

  getAll = async () => {
    return await this.addressInformationRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.addressInformationRepository.getById(id);
  };

  update = async (
    id: number,
    data: Partial<Omit<addressInformation, "id">>
  ) => {
    return await this.addressInformationRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.addressInformationRepository.delete(id);
  };
}

export default AddressInformationService;
