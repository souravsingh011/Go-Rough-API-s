import { accountSetting } from "@prisma/client";
import AccountSettingRepository from "../repository/accountSetting.repository";

class AccountSettingService {
  accountSettingRepository: AccountSettingRepository;
  constructor() {
    this.accountSettingRepository = new AccountSettingRepository();
  }

  create = async (
    data: Omit<accountSetting, "id">
  ): Promise<accountSetting> => {
    return await this.accountSettingRepository.create(data);
  };

  getAll = async () => {
    return await this.accountSettingRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.accountSettingRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<accountSetting, "id">>) => {
    return await this.accountSettingRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.accountSettingRepository.delete(id);
  };
}

export default AccountSettingService;
