import { PrismaClient, addservice } from "@prisma/client";

const prisma = new PrismaClient();
class AddserviceRepository {
  getAll = async (): Promise<addservice[]> => {
    return await prisma.addservice.findMany();
  };

  getById = async (id: number): Promise<addservice | null> => {
    return await prisma.addservice.findUnique({ where: { id } });
  };

  create = async (data: Omit<addservice, "id">): Promise<addservice> => {
    return await prisma.addservice.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<addservice, "id">>
  ): Promise<addservice> => {
    return await prisma.addservice.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<addservice> => {
    return await prisma.addservice.delete({ where: { id } });
  };
}

export default AddserviceRepository;
