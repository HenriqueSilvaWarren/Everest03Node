import { client, collectionAccess } from "../mongodb/MongoDBClient";
import UserModel from "../../domain/entities/UserModel";
import { DefaultMockRepository } from "./DefaultMockRepository";



export class UserRepository extends DefaultMockRepository<UserModel> {
    public async create(data: UserModel): Promise<void> {
        await client.connect();
        const collection = await collectionAccess(client);

        collection.insertOne(data);
    }

}