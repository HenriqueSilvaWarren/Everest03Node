export interface BaseRepository<T> {
    create(data: T): T
}