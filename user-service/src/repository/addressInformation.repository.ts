import { PrismaClient, addressInformation } from "@prisma/client";

const prisma = new PrismaClient();
class AddressInformationRepository {
  getAll = async (): Promise<addressInformation[]> => {
    return await prisma.addressInformation.findMany();
  };

  getById = async (id: number): Promise<addressInformation | null> => {
    return await prisma.addressInformation.findUnique({ where: { id } });
  };

  create = async (
    data: Omit<addressInformation, "id">
  ): Promise<addressInformation> => {
    return await prisma.addressInformation.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<addressInformation, "id">>
  ): Promise<addressInformation> => {
    return await prisma.addressInformation.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<addressInformation> => {
    return await prisma.addressInformation.delete({ where: { id } });
  };
}

export default AddressInformationRepository;
