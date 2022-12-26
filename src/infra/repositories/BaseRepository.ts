export interface BaseRepository<T> {
    create(data: T): Promise<void>
}