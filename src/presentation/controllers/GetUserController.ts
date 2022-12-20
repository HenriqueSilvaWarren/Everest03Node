import { Users } from '../../domain/user/mocks/UserMock';
import { Request, Response } from 'express';
import { IUserController } from '@controlInterfaces/IUserController';
import status from 'http-status';
import YAML from 'yamljs';


export class GetUserController implements IUserController {
    handle(req: Request, res: Response): void {
        console.log(YAML.load('../../docs/references/user_object.yaml'))
        res.status(status.OK).json(Users);
    }
}
