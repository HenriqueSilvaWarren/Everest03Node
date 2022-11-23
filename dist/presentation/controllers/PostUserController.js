"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUserController = void 0;
const UserService_1 = require("../../domain/user/services/UserService");
class PostUserController {
    static handle(req, res) {
        try {
            const body = req.body;
            const parts = body.birthdate.split('-').map(value => {
                return parseInt(value);
            });
            body.birthdate = new Date(parts[0], parts[1] - 1, parts[2]);
            UserService_1.UserService.saveUser(body);
            res.send(`Usuário criado com sucesso!`);
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    }
}
exports.PostUserController = PostUserController;
