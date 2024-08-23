import { PrismaClient, state } from "@prisma/client";

const prisma = new PrismaClient();
class StateRepository {
  getAll = async (): Promise<state[]> => {
    return await prisma.state.findMany();
  };

  getById = async (id: number): Promise<state | null> => {
    return await prisma.state.findUnique({ where: { id } });
  };

  create = async (data: Omit<state, "id">): Promise<state> => {
    return await prisma.state.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<state, "id">>
  ): Promise<state> => {
    return await prisma.state.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<state> => {
    return await prisma.state.delete({ where: { id } });
  };
}

export default StateRepository;
