import { Request, Response } from "express";
import { IUserController } from "@controlInterfaces/IUserController";

export class UserController implements IUserController {
    handle(req: Request, res: Response): void {
        res.send('A rota para se testar o funcionamento é localhost:3000/customer tanto POST quanto GET');
    }
}
