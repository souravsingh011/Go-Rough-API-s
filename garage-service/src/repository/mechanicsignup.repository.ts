import { PrismaClient, mechanicSignUp } from "@prisma/client";

const prisma = new PrismaClient();
class MechanicSignUpRepository {
  getAll = async (): Promise<mechanicSignUp[]> => {
    return await prisma.mechanicSignUp.findMany();
  };

  getById = async (id: number): Promise<mechanicSignUp | null> => {
    return await prisma.mechanicSignUp.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<mechanicSignUp, "id">
  ): Promise<mechanicSignUp> => {
    return await prisma.mechanicSignUp.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<mechanicSignUp, "id">>
  ): Promise<mechanicSignUp> => {
    return await prisma.mechanicSignUp.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<mechanicSignUp> => {
    return await prisma.mechanicSignUp.delete({ where: { id } });
  };
}

export default MechanicSignUpRepository;
