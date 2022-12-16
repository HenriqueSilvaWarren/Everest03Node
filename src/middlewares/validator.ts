import { Request, Response, NextFunction } from 'express';
import { curryN } from 'ramda';
import Joi from 'joi';
import status from 'http-status';

const numberOfParametersForTheValidator = 4;

export const validator = curryN(
    numberOfParametersForTheValidator,
    (schema: Joi.Schema, req: Request, res: Response, next: NextFunction) => {
        try {
            const validation = schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
                allowUnknown: true,
            });

            if (validation.error !== undefined) {
                throw validation.error
            }
            next();
        }
        catch (error) {
            res.status(status.BAD_REQUEST).send((error as Joi.ValidationError).message);
        }
    }
);