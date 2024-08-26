import { PrismaClient, customservice } from "@prisma/client";

const prisma = new PrismaClient();
class CustomServiceRepository {
  getAll = async (): Promise<customservice[]> => {
    return await prisma.customservice.findMany();
  };

  getById = async (id: number): Promise<customservice | null> => {
    return await prisma.customservice.findUnique({ where: { id } });
  };

  create = async (data: Omit<customservice, "id">): Promise<customservice> => {
    return await prisma.customservice.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<customservice, "id">>
  ): Promise<customservice> => {
    return await prisma.customservice.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<customservice> => {
    return await prisma.customservice.delete({ where: { id } });
  };
}

export default CustomServiceRepository;
