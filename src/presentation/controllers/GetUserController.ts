import { Users } from '../../domain/user/mocks/UserMock';
import express = require("express");
import { IUserController } from '../interfaces/IUserController';

export class GetUserController implements IUserController {
    handle(req: express.Request, res: express.Response): void {
        res.send(Users);
    }
}
