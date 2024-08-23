Step 1: Refer the below documentation for setting up prisma.
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql

Step 2: Create a folder name it "src". Further create more folders inside it name as following:
i) Repository: Provides API.
Example:

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

ii) Service: Contain complex logic. Such as validation & etc.
Example:

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

iii) Controller: Manages the API call.
Example:

    import { Request, Response } from "express";
    import UserSignUpService from "../services/userSignUp.service";

    class UserSignUpController {
    userSignUpService: UserSignUpService;
    constructor() {
        this.userSignUpService = new UserSignUpService();
    }
    getAll = async (req: Request, res: Response): Promise<void> => {
        try {
        const userSignUP = await this.userSignUpService.getAll();
        res.status(200).json(userSignUP);
        } catch (error) {
        res.status(500).json({ message: "Error fetching book status", error });
        }
    };

    getById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
        const userSignUP = await this.userSignUpService.getById(Number(id));
        if (userSignUP) {
            res.status(200).json(userSignUP);
        } else {
            res.status(404).json({ message: "User sign up status not found" });
        }
        } catch (error) {
        res
            .status(500)
            .json({ message: "Error fetching user sign up status", error });
        }
    };

    create = async (req: Request, res: Response): Promise<void> => {
        try {
        const userSignUP = await this.userSignUpService.create(req.body);
        res.status(201).json(userSignUP);
        } catch (error) {
        res.status(500).json({ message: "Error creating user sign up", error });
        }
    };

    update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
        const userSignUP = await this.userSignUpService.update(
            Number(id),
            req.body
        );
        res.status(200).json(userSignUP);
        } catch (error) {
        res.status(500).json({ message: "Error updating user sign up", error });
        }
    };

    delete = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
        await this.userSignUpService.delete(Number(id));
        res.status(204).send(); // No content response
        } catch (error) {
        res.status(500).json({ message: "Error deleting user sign up", error });
        }
    };
    }

    export default UserSignUpController;

iv) Routes: Provides route for CRUD operation.
Expamle:

    import express from "express";
    import UserSignUpController from "../controller/userSignUp.controller";

    const UserSignUpRoute = express.Router();
    const userSignUpController = new UserSignUpController();

    UserSignUpRoute.route("/")
    .post(userSignUpController.create)
    .get(userSignUpController.getAll);

    UserSignUpRoute.route("/:id")
    .get(userSignUpController.getById)
    .put(userSignUpController.update)
    .delete(userSignUpController.delete);

    export default UserSignUpRoute;

v) Routing: Providing routing inside index.ts, where we will decide the path of the API.
Example:

    import express, { Express, Request, Response } from "express";
    import UserSignUpRoute from "./routes/userSignUp.route";

    const app: Express = express();
    const port = 3000;
    app.use(express.json());

    app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    });
    app.use("/api/user/", UserSignUpRoute);

    module.exports = app;

Step 3: Once the Setup is completed test the API's with the help of Postman
