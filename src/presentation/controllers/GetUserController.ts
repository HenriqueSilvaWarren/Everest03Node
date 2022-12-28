import 'reflect-metadata';
import { Request, Response } from 'express';
import { IUserController } from '@controlInterfaces/IUserController';
import status from 'http-status';
import { IUserService } from '@userInterfaces/IUserService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetUserController implements IUserController {

    constructor(@inject('UserService') private userService: IUserService) { }

    async handle(req: Request, res: Response): Promise<void> {
        res.status(status.OK).json(await this.userService.getUser());
    }
}
