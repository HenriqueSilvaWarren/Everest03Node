import { Users } from '../../domain/user/mocks/UserMock';
import { Request, Response } from 'express';
import { IUserController } from '@controlInterfaces/IUserController';
import status from 'http-status';
export class GetUserController implements IUserController {
    handle(req: Request, res: Response): void {
        res.status(status.OK).json(Users);
    }
}
