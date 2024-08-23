import { PrismaClient, accountSetting } from "@prisma/client";

const prisma = new PrismaClient();
class AccountSettingRepository {
  getAll = async (): Promise<accountSetting[]> => {
    return await prisma.accountSetting.findMany();
  };

  getById = async (id: number): Promise<accountSetting | null> => {
    return await prisma.accountSetting.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<accountSetting, "id">
  ): Promise<accountSetting> => {
    return await prisma.accountSetting.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<accountSetting, "id">>
  ): Promise<accountSetting> => {
    return await prisma.accountSetting.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<accountSetting> => {
    return await prisma.accountSetting.delete({ where: { id } });
  };
}

export default AccountSettingRepository;
