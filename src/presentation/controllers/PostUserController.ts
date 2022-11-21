import { Users } from '../../domain/user/mocks/UserMock';
import { UserService } from '../../domain/user/services/UserService';

import express = require("express");

export class PostUserController {
    static handle(req: express.Request, res: express.Response): void {
        try {
            let user: Record<string, any> = req.body;
            UserService.checkForNull(user);
            UserService.checkForTyping(user);

            let parts: Array<number> = user.birthdate.split('-');
            user.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);

            UserService.checkIfEmailsMatch(user.email, user.email_confirmation);
            UserService.checkIfCpfIsValid(user.cpf);

            Users.push(user);
            res.send(`Usuário criado com sucesso!`);
        } catch (error: any) {
            console.log(error.name);
            console.log(error.message);
            res.status(400).send(error.message);
        }
    }
}