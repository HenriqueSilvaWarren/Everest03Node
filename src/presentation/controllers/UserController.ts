import express = require("express");
import { IUserController } from "../interfaces/IUserController";

export class UserController implements IUserController {
    handle(req: express.Request, res: express.Response): void {
        res.send('A rota para se testar o funcionamento é localhost:3000/customer tanto POST quanto GET');
    }
}
