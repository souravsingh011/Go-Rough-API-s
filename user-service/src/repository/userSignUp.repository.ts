// src/models/userSignUpModel.ts--- Model
import { PrismaClient, userSignUp } from "@prisma/client";

const prisma = new PrismaClient();
class UserSignUpRepository {
  getAll = async (): Promise<userSignUp[]> => {
    return await prisma.userSignUp.findMany();
  };

  getById = async (id: number): Promise<userSignUp | null> => {
    return await prisma.userSignUp.findUnique({ where: { id } });
  };

  create = async (data: Omit<userSignUp, "id">): Promise<userSignUp> => {
    return await prisma.userSignUp.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<userSignUp, "id">>
  ): Promise<userSignUp> => {
    return await prisma.userSignUp.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<userSignUp> => {
    return await prisma.userSignUp.delete({ where: { id } });
  };
}

export default UserSignUpRepository;
