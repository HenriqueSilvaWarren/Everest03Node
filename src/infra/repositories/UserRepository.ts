import { MongoDBClient } from "../mongodb/MongoDBClient";
import UserModel from "../../domain/entities/UserModel";
import { DefaultMockRepository } from "./DefaultMockRepository";

export class UserRepository extends DefaultMockRepository<UserModel> {
    public async create(data: UserModel): Promise<void> {
        const client = new MongoDBClient('coiso');
        const collection = client.getCollection();
        client.query(
            collection.insertOne(data),
        );
    }

}