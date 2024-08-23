import { PrismaClient, vehiclecolor } from "@prisma/client";

const prisma = new PrismaClient();
class VehicleColorRepository {
  getAll = async (): Promise<vehiclecolor[]> => {
    return await prisma.vehiclecolor.findMany();
  };

  getById = async (id: number): Promise<vehiclecolor | null> => {
    return await prisma.vehiclecolor.findUnique({ where: { id } });
  };

  create = async (data: Omit<vehiclecolor, "id">): Promise<vehiclecolor> => {
    return await prisma.vehiclecolor.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<vehiclecolor, "id">>
  ): Promise<vehiclecolor> => {
    return await prisma.vehiclecolor.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<vehiclecolor> => {
    return await prisma.vehiclecolor.delete({ where: { id } });
  };
}

export default VehicleColorRepository;
