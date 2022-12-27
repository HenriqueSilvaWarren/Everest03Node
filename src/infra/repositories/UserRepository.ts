import 'reflect-metadata';
import { MongoDBClient } from "../mongodb/MongoDBClient";
import UserModel from "../../domain/entities/UserModel";
import { DefaultMockRepository } from "./DefaultMockRepository";
export class UserRepository extends DefaultMockRepository<UserModel> {
    private client: MongoDBClient;
    constructor() {
        super();
        this.client = new MongoDBClient('coiso');
    }

    public get(): Promise<unknown> {
        const client = new MongoDBClient('coiso');
        return client.query(
            client.getCollection().find({}).toArray()
        );
    }

    public create(data: UserModel): void {
        const collection = this.client.getCollection();
        this.client.query(
            collection.insertOne(data),
        );
    }

}