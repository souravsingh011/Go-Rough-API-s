import { PrismaClient, service } from "@prisma/client";

const prisma = new PrismaClient();
class ServiceRepository {
  getAll = async (): Promise<service[]> => {
    return await prisma.service.findMany();
  };

  getById = async (id: number): Promise<service | null> => {
    return await prisma.service.findUnique({ where: { id } });
  };

  create = async (data: Omit<service, "id">): Promise<service> => {
    return await prisma.service.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<service, "id">>
  ): Promise<service> => {
    return await prisma.service.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<service> => {
    return await prisma.service.delete({ where: { id } });
  };
}

export default ServiceRepository;
