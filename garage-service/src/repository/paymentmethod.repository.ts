import { PrismaClient, paymentMethod } from "@prisma/client";

const prisma = new PrismaClient();
class paymentMethodRepository {
  getAll = async (): Promise<paymentMethod[]> => {
    return await prisma.paymentMethod.findMany();
  };

  getById = async (id: number): Promise<paymentMethod | null> => {
    return await prisma.paymentMethod.findUnique({ where: { id } });
  };

  create = async (data: Omit<paymentMethod, "id">): Promise<paymentMethod> => {
    return await prisma.paymentMethod.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<paymentMethod, "id">>
  ): Promise<paymentMethod> => {
    return await prisma.paymentMethod.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<paymentMethod> => {
    return await prisma.paymentMethod.delete({ where: { id } });
  };
}

export default paymentMethodRepository;
