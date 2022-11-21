import { Users } from '../../domain/user/mocks/UserMock';
import express = require("express");

export class GetUserController {

    static handle(req: express.Request, res: express.Response) : void{
        res.send(Users);
    }
}
