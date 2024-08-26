import { paymentMethod } from "@prisma/client";
import PaymentMethodRepository from "../repository/paymentmethod.repository";

class PaymentMethodService {
  paymentMethodRepository: PaymentMethodRepository;
  constructor() {
    this.paymentMethodRepository = new PaymentMethodRepository();
  }

  create = async (data: Omit<paymentMethod, "id">): Promise<paymentMethod> => {
    return await this.paymentMethodRepository.create(data);
  };

  getAll = async () => {
    return await this.paymentMethodRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.paymentMethodRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<paymentMethod, "id">>) => {
    return await this.paymentMethodRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.paymentMethodRepository.delete(id);
  };
}

export default PaymentMethodService;
