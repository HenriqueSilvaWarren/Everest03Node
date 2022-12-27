export interface BaseRepository<T> {
    get() : Promise<unknown>;
    create(data: T): void;
}