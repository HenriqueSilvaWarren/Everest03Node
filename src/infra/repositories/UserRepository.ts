import UserModel from "../../domain/entities/UserModel";
import { Users } from "../../domain/user/mocks/UserMock";
import { DefaultMockRepository } from "./DefaultMockRepository";



export class UserRepository extends DefaultMockRepository<UserModel> {
    public create(data: UserModel): UserModel {
        Users.push(data);
        return data;
    }

}