// src/models/addpricehoursModel.ts
import { PrismaClient, addpricehours } from "@prisma/client";

const prisma = new PrismaClient();

class PriceHourRepository {
  getAll = async (): Promise<addpricehours[]> => {
    return await prisma.addpricehours.findMany();
  };

  getById = async (id: number): Promise<addpricehours | null> => {
    return await prisma.addpricehours.findUnique({ where: { id } });
  };

  create = async (data: Omit<addpricehours, "id">): Promise<addpricehours> => {
    return await prisma.addpricehours.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<addpricehours, "id">>
  ): Promise<addpricehours> => {
    return await prisma.addpricehours.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<addpricehours> => {
    return await prisma.addpricehours.delete({ where: { id } });
  };
}

export default PriceHourRepository;
