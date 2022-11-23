import { UserSchema } from "../../../presentation/controllers/schemas/UserSchema";
import Joi = require("joi");

export class UserService {
    static checkEverything(object: Record<string, unknown>): void {
        Joi.assert(object, UserSchema);
    }
}