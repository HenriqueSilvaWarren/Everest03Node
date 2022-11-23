"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserMock_1 = require("../mocks/UserMock");
class UserService {
    static saveUser(object) {
        UserMock_1.Users.push(object);
    }
}
exports.UserService = UserService;
