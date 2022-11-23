import { Router } from "express";

export const router: Router = Router();
export const customerRouter: Router = Router();

import { UserController } from "./controllers/UserController";
import { PostUserController } from "./controllers/PostUserController";
import { GetUserController } from "./controllers/GetUserController";
import { validator } from '../middlewares/validator';
import { UserSchema } from "./controllers/schemas/UserSchema";


router.get("/", UserController.handle);

customerRouter.post("/", validator(UserSchema), PostUserController.handle);

customerRouter.get("/", GetUserController.handle,);


