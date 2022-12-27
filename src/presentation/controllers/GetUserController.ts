import { Request, Response } from 'express';
import { IUserController } from '@controlInterfaces/IUserController';
import status from 'http-status';
import { MongoDBClient } from '../../infra/mongodb/MongoDBClient';

export class GetUserController implements IUserController {
    async handle(req: Request, res: Response): Promise<void> {
        const client = new MongoDBClient('coiso');
        const response = await client.query(
            client.getCollection().find({}).toArray()
        );
        res.status(status.OK).json(response);

        
    }
}
