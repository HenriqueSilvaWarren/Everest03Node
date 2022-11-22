"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUserController = void 0;
const UserMock_1 = require("../../domain/user/mocks/UserMock");
const UserService_1 = require("../../domain/user/services/UserService");
class PostUserController {
    static handle(req, res) {
        try {
            const user = req.body;
            UserService_1.UserService.checkForNull(user);
            UserService_1.UserService.checkForTyping(user);
            const parts = user.birthdate.split('-').map(value => {
                return parseInt(value);
            });
            user.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);
            UserService_1.UserService.checkIfEmailsMatch(user.email, user.email_confirmation);
            UserService_1.UserService.checkIfCpfIsValid(user.cpf);
            UserMock_1.Users.push(user);
            res.send(`Usuário criado com sucesso!`);
        }
        catch (error) {
            console.log(error.name);
            console.log(error.message);
            res.status(400).send(error.message);
        }
    }
}
exports.PostUserController = PostUserController;
