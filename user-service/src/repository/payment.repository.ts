import { PrismaClient, payment } from "@prisma/client";
import { UserSignUpIdAlreadyExistsError } from "../public/custom.error";

const prisma = new PrismaClient();
class PaymentRepository {
  getAll = async (): Promise<payment[]> => {
    return await prisma.payment.findMany();
  };

  getById = async (id: number): Promise<payment | null> => {
    return await prisma.payment.findUnique({ where: { id } });
  };

  create = async (data: Omit<payment, "id">): Promise<payment> => {
    const existingRecord = await prisma.accountSetting.findFirst({
      where: { user_sign_up_id: data.user_sign_up_id },
    });

    if (existingRecord?.user_sign_up_id) {
      throw new UserSignUpIdAlreadyExistsError("User SignUp Id Already Exists");
    }
    return await prisma.payment.create({ data });
  };

  update = async (
    id: number,
    data: Partial<Omit<payment, "id">>
  ): Promise<payment> => {
    return await prisma.payment.update({
      where: { id },
      data,
    });
  };

  delete = async (id: number): Promise<payment> => {
    return await prisma.payment.delete({ where: { id } });
  };
}

export default PaymentRepository;
