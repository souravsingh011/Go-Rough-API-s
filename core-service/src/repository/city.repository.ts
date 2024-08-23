// src/models/cityModel.ts
import { PrismaClient, city } from "@prisma/client";

const prisma = new PrismaClient();
class CityRepository {
  getAll = async (): Promise<city[]> => {
    return await prisma.city.findMany();
  };

  getById = async (id: number): Promise<city | null> => {
    return await prisma.city.findUnique({ where: { id } });
  };

  create = async (data: Omit<city, "id">): Promise<city> => {
    return await prisma.city.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<city, "id">>
  ): Promise<city> => {
    return await prisma.city.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<city> => {
    return await prisma.city.delete({ where: { id } });
  };
}

export default CityRepository;
