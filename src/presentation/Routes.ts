import { Router } from "express";

export const router: Router = Router();
export const customerRouter: Router = Router();

import { UserController } from "./controllers/UserController";
import { PostUserController } from "./controllers/PostUserController";
import { GetUserController } from "./controllers/GetUserController";
import { validator } from '../middlewares/validator';
import { UserSchema } from "./controllers/schemas/UserSchema";
import { customContainer } from "../di/index";

const postUserController = customContainer.resolve(PostUserController);
const userController = new UserController();
const getUserController = new GetUserController();

router.get("/", userController.handle);

customerRouter.post("/", validator(UserSchema), (req, res) => postUserController.handle(req, res),);

customerRouter.get("/", getUserController.handle,);


