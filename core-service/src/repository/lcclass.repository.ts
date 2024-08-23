import { PrismaClient, lcclass } from "@prisma/client";

const prisma = new PrismaClient();

class LcClassRepository {
  getAll = async (): Promise<lcclass[]> => {
    return await prisma.lcclass.findMany();
  };

  getById = async (lc_id: number): Promise<lcclass | null> => {
    return await prisma.lcclass.findUnique({ where: { lc_id } });
  };

  create = async (data: Omit<lcclass, "id">): Promise<lcclass> => {
    return await prisma.lcclass.create({ data });
  };

  update = async (
    lc_id: number,
    data: Partial<Omit<lcclass, "id">>
  ): Promise<lcclass> => {
    return await prisma.lcclass.update({
      where: { lc_id },
      data,
    });
  };

  delete = async (lc_id: number): Promise<lcclass> => {
    return await prisma.lcclass.delete({ where: { lc_id } });
  };
}

export default LcClassRepository;
