import { PrismaClient, mechanicDetails } from "@prisma/client";

const prisma = new PrismaClient();
class mechanicDetailsRepository {
  getAll = async (): Promise<mechanicDetails[]> => {
    return await prisma.mechanicDetails.findMany();
  };

  getById = async (id: number): Promise<mechanicDetails | null> => {
    return await prisma.mechanicDetails.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<mechanicDetails, "id">
  ): Promise<mechanicDetails> => {
    return await prisma.mechanicDetails.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<mechanicDetails, "id">>
  ): Promise<mechanicDetails> => {
    return await prisma.mechanicDetails.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<mechanicDetails> => {
    return await prisma.mechanicDetails.delete({ where: { id } });
  };
}

export default mechanicDetailsRepository;
