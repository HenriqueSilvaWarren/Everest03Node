import 'reflect-metadata';
import { GetUserController } from '../presentation/controllers/GetUserController';
import { PostUserController } from '../presentation/controllers/PostUserController';
import { CustomerRouter } from '../presentation/routers/CustomerRouter';
import { container } from "tsyringe";
import UserModel from "../domain/entities/UserModel";
import { IUserService } from "../domain/interfaces/IUserService";
import { UserService } from "../domain/user/services/UserService";
import { BaseRepository } from "../infra/repositories/BaseRepository";
import { UserRepository } from "../infra/repositories/UserRepository";

container.registerSingleton<BaseRepository<UserModel>>('UserRepository', UserRepository)

container.registerSingleton<IUserService>('UserService', UserService);

container.registerSingleton<PostUserController>('PostUserController', PostUserController);

container.registerSingleton<GetUserController>('GetUserController', GetUserController);

container.registerSingleton<CustomerRouter>('CustomerRouter', CustomerRouter);

export const customContainer = container;

