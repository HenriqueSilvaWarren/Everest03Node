import { Request, Response, NextFunction } from 'express';
import { curryN } from 'ramda';
import Joi from 'joi';

const numberOfParametersForTheValidator = 4;

export const validator = curryN(
    numberOfParametersForTheValidator,
    (schema: Joi.Schema, req: Request, res: Response, next: NextFunction) => {
        try {
            Joi.assert(req.body, schema);
            next();
        } catch (error) {
            res.status(400).send((error as Record<string, string>).message);
        }
    }
);