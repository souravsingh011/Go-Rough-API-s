import { PrismaClient, vehicleInformation } from "@prisma/client";

const prisma = new PrismaClient();
class VehicleInformationRepository {
  getAll = async (): Promise<vehicleInformation[]> => {
    return await prisma.vehicleInformation.findMany();
  };

  getById = async (id: number): Promise<vehicleInformation | null> => {
    return await prisma.vehicleInformation.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<vehicleInformation, "id">
  ): Promise<vehicleInformation> => {
    return await prisma.vehicleInformation.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<vehicleInformation, "id">>
  ): Promise<vehicleInformation> => {
    return await prisma.vehicleInformation.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<vehicleInformation> => {
    return await prisma.vehicleInformation.delete({ where: { id } });
  };
}

export default VehicleInformationRepository;
