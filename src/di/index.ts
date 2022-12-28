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
import { DocsService } from '../domain/docs/services/DocsService';
import { DocsController } from '../presentation/controllers/DocsController';
import { DocsRouter } from '../presentation/routers/DocsRouter';

container.registerSingleton<BaseRepository<UserModel>>('UserRepository', UserRepository);

container.registerSingleton<IUserService>('UserService', UserService);

container.registerSingleton<DocsService>('DocsService', DocsService);

container.registerSingleton<PostUserController>('PostUserController', PostUserController);

container.registerSingleton<GetUserController>('GetUserController', GetUserController);

container.registerSingleton<DocsController>('DocsController', DocsController);

container.registerSingleton<CustomerRouter>('CustomerRouter', CustomerRouter);

container.registerSingleton<DocsRouter>('DocsRouter', DocsRouter);

export const customContainer = container;

