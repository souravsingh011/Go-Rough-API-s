import { PrismaClient, home } from "@prisma/client";

const prisma = new PrismaClient();
class HomeRepository {
  getAll = async (): Promise<home[]> => {
    return await prisma.home.findMany();
  };

  getById = async (id: number): Promise<home | null> => {
    return await prisma.home.findUnique({ where: { id } });
  };

  create = async (data: Omit<home, "id">): Promise<home> => {
    return await prisma.home.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<home, "id">>
  ): Promise<home> => {
    return await prisma.home.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<home> => {
    return await prisma.home.delete({ where: { id } });
  };
}

export default HomeRepository;
