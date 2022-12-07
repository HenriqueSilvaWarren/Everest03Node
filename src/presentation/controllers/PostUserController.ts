import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';


import { Request, Response } from "express";
import { IUserService } from '@userInterfaces/IUserService';
import { IUserController } from '@controlInterfaces/IUserController';



@injectable()
export class PostUserController implements IUserController {

    constructor(@inject('UserService') private userService: IUserService) { }

    handle(req: Request, res: Response): void {
        try {
            const body: Record<string, unknown> = req.body;
            const parts: Array<number> = (body.birthdate as string).split('-').map(value => {
                return parseInt(value);
            });

            body.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);

            this.userService.saveUser(body);

            res.status(201).send(`Usuário criado com sucesso!`);
        } catch (error) {
            res.status(500).send((error as Record<string, string>).message);
        }
    }
}
