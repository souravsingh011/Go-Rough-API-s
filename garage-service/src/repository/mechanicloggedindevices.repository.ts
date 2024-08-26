import { PrismaClient, mechanicLoggedInDevices } from "@prisma/client";

const prisma = new PrismaClient();
class MechanicLoggedInDevicesRepository {
  getAll = async (): Promise<mechanicLoggedInDevices[]> => {
    return await prisma.mechanicLoggedInDevices.findMany();
  };

  getById = async (id: number): Promise<mechanicLoggedInDevices | null> => {
    return await prisma.mechanicLoggedInDevices.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<mechanicLoggedInDevices, "id">
  ): Promise<mechanicLoggedInDevices> => {
    return await prisma.mechanicLoggedInDevices.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<mechanicLoggedInDevices, "id">>
  ): Promise<mechanicLoggedInDevices> => {
    return await prisma.mechanicLoggedInDevices.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<mechanicLoggedInDevices> => {
    return await prisma.mechanicLoggedInDevices.delete({ where: { id } });
  };
}

export default MechanicLoggedInDevicesRepository;
