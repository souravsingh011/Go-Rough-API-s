class MechanicSignUpIdAlreadyExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Mechanic SignUp Id Already Exists Error";
  }
}

class GarageInformationIdAlreadyExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Garage Information Id Already Exists Error";
  }
}
