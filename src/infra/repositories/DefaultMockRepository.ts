import { IBaseModel } from "../../domain/interfaces/IBaseModel";
import { Repository } from "./Repository";

export abstract class DefaultMockRepository<T extends IBaseModel> extends Repository<T> {
    public abstract get(): Promise<unknown>;
    public abstract create(data: T): void;
}