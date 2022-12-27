import { Db, MongoClient } from "mongodb";
import 'reflect-metadata';

export class MongoDBClient {
    private db: Db;
    private client: MongoClient;
    private collection: string;
    private dbName = 'card08';
    private url = "mongodb://localhost:27017";

    constructor( collection: string) {
        this.collection = collection;
        this.client = new MongoClient(this.url);
        this.db = this.client.db(this.dbName)
    }

    public getCollection() {
        return this.db.collection(this.collection);
    }

    public async query(query: unknown) {
        try {
            this.client.connect();
            return await query;
        }
        finally {
            this.client.close()
        }
    }
}





