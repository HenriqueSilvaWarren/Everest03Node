"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUserController = void 0;
const UserMock_1 = require("../../domain/user/mocks/UserMock");
const UserService_1 = require("../../domain/user/services/UserService");
class PostUserController {
    static handle(req, res) {
        try {
            const user = req.body;
            UserService_1.UserService.checkEverything(user);
            const parts = user.birthdate.split('-').map(value => {
                return parseInt(value);
            });
            user.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);
            UserMock_1.Users.push(user);
            res.send(`Usuário criado com sucesso!`);
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    }
}
exports.PostUserController = PostUserController;
