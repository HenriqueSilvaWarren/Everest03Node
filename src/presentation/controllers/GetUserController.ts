import { Request, Response } from 'express';
import { IUserController } from '@controlInterfaces/IUserController';
import status from 'http-status';
import { client, collectionAccess } from '../../infra/mongodb/MongoDBClient';


export class GetUserController implements IUserController {
    async handle(req: Request, res: Response): Promise<void> {
        await client.connect();
        const collection = await collectionAccess(client);
        res.status(status.OK).json(await collection.find({}).toArray());
        client.close();
    }
}
