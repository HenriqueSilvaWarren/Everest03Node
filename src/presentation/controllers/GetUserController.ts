import { Users } from '../../domain/user/mocks/UserMock';
import { Request, Response } from 'express';
import { IUserController } from '@controlInterfaces/IUserController';

export class GetUserController implements IUserController {
    handle(req: Request, res: Response): void {
        res.status(200).json(Users);
    }
}
