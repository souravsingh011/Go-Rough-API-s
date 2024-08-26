import { PrismaClient, serviceType } from "@prisma/client";

const prisma = new PrismaClient();
class serviceTypeRepository {
  getAll = async (): Promise<serviceType[]> => {
    return await prisma.serviceType.findMany();
  };

  getById = async (id: number): Promise<serviceType | null> => {
    return await prisma.serviceType.findUnique({ where: { id } });
  };

  create = async (data: Omit<serviceType, "id">): Promise<serviceType> => {
    return await prisma.serviceType.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<serviceType, "id">>
  ): Promise<serviceType> => {
    return await prisma.serviceType.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<serviceType> => {
    return await prisma.serviceType.delete({ where: { id } });
  };
}

export default serviceTypeRepository;
