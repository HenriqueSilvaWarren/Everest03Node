import { Collection, MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
export const client = new MongoClient(url);
const dbName = 'card08';

export async function collectionAccess(client: MongoClient): Promise<Collection> {

    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('coiso');

    return collection;
}


