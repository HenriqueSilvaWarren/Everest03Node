"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
const UserMock_1 = require("../../domain/user/mocks/UserMock");
class GetUserController {
    static handle(req, res) {
        res.send(UserMock_1.Users);
    }
}
exports.GetUserController = GetUserController;
