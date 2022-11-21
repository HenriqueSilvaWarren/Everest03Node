"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    static handle(res) {
        res.send('A rota para se testar o funcionamento é localhost:3000/customerk tanto POST quanto GET');
    }
}
exports.UserController = UserController;
