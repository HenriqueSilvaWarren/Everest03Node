"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserSchema_1 = require("../../../presentation/controllers/schemas/UserSchema");
const Joi = require("joi");
class UserService {
    static checkEverything(object) {
        Joi.assert(object, UserSchema_1.UserSchema);
    }
}
exports.UserService = UserService;
