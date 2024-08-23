import { userSignUp } from "@prisma/client";
import UserSignUpRepository from "../repository/userSignUp.repository";

class UserSignUpService {
  userSignUpRepository: UserSignUpRepository;
  constructor() {
    this.userSignUpRepository = new UserSignUpRepository();
  }

  create = async (data: Omit<userSignUp, "id">): Promise<userSignUp> => {
    return await this.userSignUpRepository.create(data);
  };

  getAll = async () => {
    return await this.userSignUpRepository.getAll();
  };

  getById = async (id: number) => {
    return await this.userSignUpRepository.getById(id);
  };

  update = async (id: number, data: Partial<Omit<userSignUp, "id">>) => {
    return await this.userSignUpRepository.update(id, data);
  };

  delete = async (id: number) => {
    return await this.userSignUpRepository.delete(id);
  };
}

export default UserSignUpService;
