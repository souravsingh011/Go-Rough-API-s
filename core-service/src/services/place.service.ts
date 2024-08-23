import PlaceRepository from "../repository/place.repository";
import { place } from "@prisma/client";

class PlaceService {
  placeRepository: PlaceRepository;
  constructor() {
    this.placeRepository = new PlaceRepository();
  }

  create = async (data: Omit<place, "id">): Promise<place> => {
    return await this.placeRepository.create(data);
  };

  getAll = async () => {
    return await this.placeRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.placeRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<place, "id">>) => {
    return await this.placeRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.placeRepository.delete(id);
  };
}

export default PlaceService;
