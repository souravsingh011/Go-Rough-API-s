import { addSpecialOffer } from "@prisma/client";
import AddSpecialOfferRepository from "../repository/addspecialoffer.repository";

class AddSpecialOfferService {
  addSpecialOfferRepository: AddSpecialOfferRepository;
  constructor() {
    this.addSpecialOfferRepository = new AddSpecialOfferRepository();
  }

  create = async (
    data: Omit<addSpecialOffer, "id">
  ): Promise<addSpecialOffer> => {
    return await this.addSpecialOfferRepository.create(data);
  };

  getAll = async () => {
    return await this.addSpecialOfferRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.addSpecialOfferRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<addSpecialOffer, "id">>) => {
    return await this.addSpecialOfferRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.addSpecialOfferRepository.delete(id);
  };
}

export default AddSpecialOfferService;
