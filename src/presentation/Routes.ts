import { Router } from "express";

export const router: Router = Router();

import { UserController } from "./controllers/UserController";
import { PostUserController } from "./controllers/PostUserController";
import { GetUserController } from "./controllers/GetUserController";

router.get("/", UserController.handle);

router.post("/customer", PostUserController.handle);

router.get("/customer", GetUserController.handle);


