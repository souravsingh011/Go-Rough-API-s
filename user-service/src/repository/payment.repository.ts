import { PrismaClient, payment } from "@prisma/client";

const prisma = new PrismaClient();
class PaymentRepository {
  getAll = async (): Promise<payment[]> => {
    return await prisma.payment.findMany();
  };

  getById = async (id: number): Promise<payment | null> => {
    return await prisma.payment.findUnique({ where: { id } });
  };

  create = async (data: Omit<payment, "id">): Promise<payment> => {
    return await prisma.payment.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<payment, "id">>
  ): Promise<payment> => {
    return await prisma.payment.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<payment> => {
    return await prisma.payment.delete({ where: { id } });
  };
}

export default PaymentRepository;
