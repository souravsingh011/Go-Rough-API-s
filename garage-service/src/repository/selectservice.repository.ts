import { PrismaClient, selectservice } from "@prisma/client";

const prisma = new PrismaClient();
class SelectServiceRepository {
  getAll = async (): Promise<selectservice[]> => {
    return await prisma.selectservice.findMany();
  };

  getById = async (id: number): Promise<selectservice | null> => {
    return await prisma.selectservice.findUnique({ where: { id } });
  };

  create = async (data: Omit<selectservice, "id">): Promise<selectservice> => {
    return await prisma.selectservice.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<selectservice, "id">>
  ): Promise<selectservice> => {
    return await prisma.selectservice.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<selectservice> => {
    return await prisma.selectservice.delete({ where: { id } });
  };
}

export default SelectServiceRepository;
