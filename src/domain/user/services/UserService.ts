
import { Users } from "../mocks/UserMock";


export class UserService {
    static saveUser(object: Record<string, unknown>): void {
        Users.push(object);
    }
}