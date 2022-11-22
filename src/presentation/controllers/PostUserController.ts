import { Users } from '../../domain/user/mocks/UserMock';
import { UserService } from '../../domain/user/services/UserService';

import express = require("express");

export class PostUserController {
    static handle(req: express.Request, res: express.Response): void {
        try {
            const user: Record<string, unknown> = req.body;
            UserService.checkForNull(user);
            UserService.checkForTyping(user);

            const parts: Array<number> = (user.birthdate as string).split('-').map(value => {
                return parseInt(value);
            });
            user.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);

            UserService.checkIfEmailsMatch(user.email as string, user.email_confirmation as string);
            UserService.checkIfCpfIsValid(user.cpf as string);

            Users.push(user);
            res.send(`Usuário criado com sucesso!`);
        } catch (error: unknown) {
            console.log((error as Record<string, string>).name);
            console.log((error as Record<string, string>).message);
            res.status(400).send((error as Record<string, string>).message);
        }
    }
}