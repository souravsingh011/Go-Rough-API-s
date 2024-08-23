import { PrismaClient, place } from "@prisma/client";

const prisma = new PrismaClient();

class PlaceRepository {
  getAll = async (): Promise<place[]> => {
    return await prisma.place.findMany();
  };

  getById = async (id: number): Promise<place | null> => {
    return await prisma.place.findUnique({ where: { id } });
  };

  create = async (data: Omit<place, "id">): Promise<place> => {
    return await prisma.place.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<place, "id">>
  ): Promise<place> => {
    return await prisma.place.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<place> => {
    return await prisma.place.delete({ where: { id } });
  };
}

export default PlaceRepository;
