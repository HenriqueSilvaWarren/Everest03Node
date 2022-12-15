import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import { Request, Response } from "express";
import { IUserService } from '@userInterfaces/IUserService';
import { IUserController } from '@controlInterfaces/IUserController';

@injectable()
export class PostUserController implements IUserController {

    constructor(@inject('UserService') private userService: IUserService) { }

    handle(req: Request, res: Response): void {
        const body: Record<string, unknown> = req.body;
        const parts: Array<number> = (body.birthdate as string).split('-').map(value => {
            return parseInt(value);
        });

        body.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);

        this.userService.saveUser(body);

        res.status(201).json(`Usuário criado com sucesso!`);
    }
}
