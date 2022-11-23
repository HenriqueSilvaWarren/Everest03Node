"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    static handle(req, res) {
        res.send('A rota para se testar o funcionamento é localhost:3000/customer tanto POST quanto GET');
    }
}
exports.UserController = UserController;
