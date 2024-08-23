import { payment } from "@prisma/client";
import PaymentRepository from "../repository/payment.repository";

class PaymentService {
  paymentRepository: PaymentRepository;
  constructor() {
    this.paymentRepository = new PaymentRepository();
  }

  create = async (data: Omit<payment, "id">): Promise<payment> => {
    return await this.paymentRepository.create(data);
  };

  getAll = async () => {
    return await this.paymentRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.paymentRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<payment, "id">>) => {
    return await this.paymentRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.paymentRepository.delete(id);
  };
}

export default PaymentService;
