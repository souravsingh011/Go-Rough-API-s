export class UserSignUpIdAlreadyExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "User SignUp Id Already Exists";
  }
}
