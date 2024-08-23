import { PrismaClient, vehicletype } from "@prisma/client";

const prisma = new PrismaClient();
class VehicleTypeRepository {
  getAll = async (): Promise<vehicletype[]> => {
    return await prisma.vehicletype.findMany();
  };

  getById = async (id: number): Promise<vehicletype | null> => {
    return await prisma.vehicletype.findUnique({ where: { id } });
  };

  create = async (data: Omit<vehicletype, "id">): Promise<vehicletype> => {
    return await prisma.vehicletype.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<vehicletype, "id">>
  ): Promise<vehicletype> => {
    return await prisma.vehicletype.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<vehicletype> => {
    return await prisma.vehicletype.delete({ where: { id } });
  };
}
export default VehicleTypeRepository;
