import { Db, MongoClient } from "mongodb";
import process from "process";
import 'reflect-metadata';

export class MongoDBClient {
    private db: Db;
    private client: MongoClient;
    private collection: string;
    private dbName = process.env.DB_NAME;
    private url = process.env.DB_URL || '';

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





