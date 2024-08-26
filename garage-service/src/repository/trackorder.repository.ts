import { PrismaClient, trackOrder } from "@prisma/client";

const prisma = new PrismaClient();
class trackOrderRepository {
  getAll = async (): Promise<trackOrder[]> => {
    return await prisma.trackOrder.findMany();
  };

  getById = async (id: number): Promise<trackOrder | null> => {
    return await prisma.trackOrder.findUnique({ where: { id } });
  };

  create = async (data: Omit<trackOrder, "id">): Promise<trackOrder> => {
    return await prisma.trackOrder.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<trackOrder, "id">>
  ): Promise<trackOrder> => {
    return await prisma.trackOrder.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<trackOrder> => {
    return await prisma.trackOrder.delete({ where: { id } });
  };
}

export default trackOrderRepository;
