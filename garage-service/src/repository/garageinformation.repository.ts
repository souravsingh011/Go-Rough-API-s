import { PrismaClient, garageInformation } from "@prisma/client";

const prisma = new PrismaClient();
class garageInformationRepository {
  getAll = async (): Promise<garageInformation[]> => {
    return await prisma.garageInformation.findMany();
  };

  getById = async (id: number): Promise<garageInformation | null> => {
    return await prisma.garageInformation.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<garageInformation, "id">
  ): Promise<garageInformation> => {
    return await prisma.garageInformation.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<garageInformation, "id">>
  ): Promise<garageInformation> => {
    return await prisma.garageInformation.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<garageInformation> => {
    return await prisma.garageInformation.delete({ where: { id } });
  };
}

export default garageInformationRepository;
