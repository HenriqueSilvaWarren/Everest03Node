import { BaseRepository } from "./BaseRepository";

export abstract class Repository<T> implements BaseRepository<T> {
    public abstract get(): Promise<unknown>;
    public abstract create(data : T): void;
}