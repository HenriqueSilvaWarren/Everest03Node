import { inject, injectable } from "tsyringe";
import { BaseRepository } from "@infra/repositories/BaseRepository"
import UserModel from "@entities/UserModel";
import { IUserService } from "@userInterfaces/IUserService";

@injectable()
export class UserService implements IUserService {

    constructor(@inject('UserRepository') private userRepository: BaseRepository<UserModel>) { }

    saveUser(object: Record<string, object>): void {
        const model = new UserModel(object);

        this.userRepository.create(model);
    }
}