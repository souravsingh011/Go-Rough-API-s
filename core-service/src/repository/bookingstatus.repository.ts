// src/models/bookingstatusModel.ts--- Model
import { PrismaClient, bookingstatus } from "@prisma/client";

const prisma = new PrismaClient();
class BookingStatusRepository {
  getAll = async (): Promise<bookingstatus[]> => {
    return await prisma.bookingstatus.findMany();
  };

  getById = async (id: number): Promise<bookingstatus | null> => {
    return await prisma.bookingstatus.findUnique({ where: { id } });
  };

  create = async (data: Omit<bookingstatus, "id">): Promise<bookingstatus> => {
    return await prisma.bookingstatus.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<bookingstatus, "id">>
  ): Promise<bookingstatus> => {
    return await prisma.bookingstatus.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<bookingstatus> => {
    return await prisma.bookingstatus.delete({ where: { id } });
  };
}

export default BookingStatusRepository;
