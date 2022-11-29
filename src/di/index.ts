import { container } from "tsyringe";
import UserModel from "../domain/entities/UserModel";
import { IUserService } from "../domain/interfaces/IUserService";
import { UserService } from "../domain/user/services/UserService";
import { BaseRepository } from "../infra/repositories/BaseRepository";
import { UserRepository } from "../infra/repositories/UserRepository";

container.registerSingleton<BaseRepository<UserModel>>('UserRepository', UserRepository)

container.registerSingleton<IUserService>('UserService', UserService);

export const customContainer = container;

