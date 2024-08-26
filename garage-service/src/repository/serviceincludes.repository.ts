import { PrismaClient, serviceIncludes } from "@prisma/client";

const prisma = new PrismaClient();
class ServiceIncludesRepository {
  getAll = async (): Promise<serviceIncludes[]> => {
    return await prisma.serviceIncludes.findMany();
  };

  getById = async (id: number): Promise<serviceIncludes | null> => {
    return await prisma.serviceIncludes.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<serviceIncludes, "id">
  ): Promise<serviceIncludes> => {
    return await prisma.serviceIncludes.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<serviceIncludes, "id">>
  ): Promise<serviceIncludes> => {
    return await prisma.serviceIncludes.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<serviceIncludes> => {
    return await prisma.serviceIncludes.delete({ where: { id } });
  };
}

export default ServiceIncludesRepository;
