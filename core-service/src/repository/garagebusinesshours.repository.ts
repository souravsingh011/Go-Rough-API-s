// src/models/cityModel.ts
import { PrismaClient, garagebusinesshours } from "@prisma/client";

const prisma = new PrismaClient();
class GarageBusinessHoursRepository {
  getAll = async (): Promise<garagebusinesshours[]> => {
    return await prisma.garagebusinesshours.findMany();
  };

  getById = async (id: number): Promise<garagebusinesshours | null> => {
    return await prisma.garagebusinesshours.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<garagebusinesshours, "id">
  ): Promise<garagebusinesshours> => {
    return await prisma.garagebusinesshours.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<garagebusinesshours, "id">>
  ): Promise<garagebusinesshours> => {
    return await prisma.garagebusinesshours.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<garagebusinesshours> => {
    return await prisma.garagebusinesshours.delete({ where: { id } });
  };
}

export default GarageBusinessHoursRepository;
