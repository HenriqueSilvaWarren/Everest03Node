
import { IUserService } from "../../interfaces/IUserService";
import { Users } from "../mocks/UserMock";


export class UserService implements IUserService {
    static saveUser(object: Record<string, unknown>): void {
        Users.push(object);
    }
}