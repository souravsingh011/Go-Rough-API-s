import { PrismaClient, date } from "@prisma/client";

const prisma = new PrismaClient();
class DateRepository {
  getAll = async (): Promise<date[]> => {
    return await prisma.date.findMany();
  };

  getById = async (id: number): Promise<date | null> => {
    return await prisma.date.findUnique({ where: { id } });
  };

  create = async (data: Omit<date, "id">): Promise<date> => {
    return await prisma.date.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<date, "id">>
  ): Promise<date> => {
    return await prisma.date.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<date> => {
    return await prisma.date.delete({ where: { id } });
  };
}

export default DateRepository;
