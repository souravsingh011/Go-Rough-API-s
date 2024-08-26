import TrackOrderRepository from "../repository/trackorder.repository";
import { trackOrder } from "@prisma/client";

class TrackOrderService {
  trackOrderRepository: TrackOrderRepository;
  constructor() {
    this.trackOrderRepository = new TrackOrderRepository();
  }

  create = async (data: Omit<trackOrder, "id">): Promise<trackOrder> => {
    return await this.trackOrderRepository.create(data);
  };

  getAll = async () => {
    return await this.trackOrderRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.trackOrderRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<trackOrder, "id">>) => {
    return await this.trackOrderRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.trackOrderRepository.delete(id);
  };
}

export default TrackOrderService;
