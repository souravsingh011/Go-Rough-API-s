// src/models/bookingstatusModel.ts
import { PrismaClient, country } from "@prisma/client";

const prisma = new PrismaClient();
class CountryRepository {
  getAll = async (): Promise<country[]> => {
    return await prisma.country.findMany();
  };

  getById = async (id: number): Promise<country | null> => {
    return await prisma.country.findUnique({ where: { id } });
  };

  create = async (data: Omit<country, "id">): Promise<country> => {
    return await prisma.country.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<country, "id">>
  ): Promise<country> => {
    return await prisma.country.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<country> => {
    return await prisma.country.delete({ where: { id } });
  };
}

export default CountryRepository;
