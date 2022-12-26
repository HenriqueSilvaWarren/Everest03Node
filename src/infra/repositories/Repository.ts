import { BaseRepository } from "./BaseRepository";

export abstract class Repository<T> implements BaseRepository<T> {
    public abstract create(data : T): Promise<void>;
}