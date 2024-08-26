import { PrismaClient, addSpecialOffer } from "@prisma/client";

const prisma = new PrismaClient();
class addSpecialOfferRepository {
  getAll = async (): Promise<addSpecialOffer[]> => {
    return await prisma.addSpecialOffer.findMany();
  };

  getById = async (id: number): Promise<addSpecialOffer | null> => {
    return await prisma.addSpecialOffer.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<addSpecialOffer, "id">
  ): Promise<addSpecialOffer> => {
    return await prisma.addSpecialOffer.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<addSpecialOffer, "id">>
  ): Promise<addSpecialOffer> => {
    return await prisma.addSpecialOffer.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<addSpecialOffer> => {
    return await prisma.addSpecialOffer.delete({ where: { id } });
  };
}

export default addSpecialOfferRepository;
