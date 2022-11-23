import { Users } from '../../domain/user/mocks/UserMock';
import { UserService } from '../../domain/user/services/UserService';

import express = require("express");

export class PostUserController {
    static handle(req: express.Request, res: express.Response): void {
        try {
            const body: Record<string, unknown> = req.body;
            UserService.checkEverything(body);

            const parts: Array<number> = (body.birthdate as string).split('-').map(value => {
                return parseInt(value);
            });
            body.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);

            Users.push(body);
            res.send(`Usuário criado com sucesso!`);
        } catch (error: unknown) {
            res.status(400).send((error as Record<string, string>).message);
        }
    }
}