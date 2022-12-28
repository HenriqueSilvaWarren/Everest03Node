export interface IUserService {
    getUser(): Promise<unknown>;
    saveUser(object: Record<string, unknown>): void;
}