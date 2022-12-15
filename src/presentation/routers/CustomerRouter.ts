import "reflect-metadata";
import { Router } from "express";
import { validator } from "../../middlewares/validator";
import { inject, injectable } from "tsyringe";
import { GetUserController } from "../controllers/GetUserController";
import { PostUserController } from "../controllers/PostUserController";
import { UserSchema } from "../controllers/schemas/UserSchema";

@injectable()
export class CustomerRouter {
    private _router: Router = Router();
    constructor(
        @inject('PostUserController') private postUserController: PostUserController,
        @inject('GetUserController') private getUserController: GetUserController,
    ) { }
    setup(): Router {
        this._router.post("/", validator(UserSchema), (req, res) => this.postUserController.handle(req, res),);

        this._router.get("/", this.getUserController.handle,);

        return this._router;
    }
}