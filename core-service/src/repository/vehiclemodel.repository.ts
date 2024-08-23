import { PrismaClient, vehiclemodel } from "@prisma/client";

const prisma = new PrismaClient();
class VehicleModelRepository {
  getAll = async (): Promise<vehiclemodel[]> => {
    return await prisma.vehiclemodel.findMany();
  };

  getById = async (id: number): Promise<vehiclemodel | null> => {
    return await prisma.vehiclemodel.findUnique({ where: { id } });
  };

  create = async (data: Omit<vehiclemodel, "id">): Promise<vehiclemodel> => {
    return await prisma.vehiclemodel.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<vehiclemodel, "id">>
  ): Promise<vehiclemodel> => {
    return await prisma.vehiclemodel.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<vehiclemodel> => {
    return await prisma.vehiclemodel.delete({ where: { id } });
  };
}

export default VehicleModelRepository;
