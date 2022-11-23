import { Request, Response, NextFunction } from 'express';
import { curryN } from 'ramda';
import Joi from 'joi';

export const validator = curryN(
    4,
    (schema: Joi.Schema, req: Request, res: Response, next: NextFunction) => {
        try {
            Joi.assert(req.body, schema);
            next();
        } catch (error) {
            res.status(400).send((error as Record<string, string>).message);
        }
    }
);