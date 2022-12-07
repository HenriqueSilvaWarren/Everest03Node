import { Request, Response, NextFunction } from "express";
import { UserSchema } from "../presentation/controllers/schemas/UserSchema";
import { validator } from "../middlewares/validator";

describe('Validator', () => {
    describe('validate', () => {
        it('Should call next function if all validations where determined to be ok', () => {
            const req = {
                body: {
                    "full_name": "Henrique da Silva",
                    "email": "thiagomoura@gmail.com",
                    "email_confirmation": "thiagomoura@gmail.com",
                    "cpf": "826.057.420-91",
                    "cellphone": "(61) 9 8497-7939",
                    "birthdate": "1993-04-21",
                    "email_sms": false,
                    "whatsapp": true,
                    "country": "Alemanha",
                    "city": "Berlim",
                    "postal_code": "61118",
                    "address": "Bad Vilbel",
                    "number": 128,
                },
            };
            const next: NextFunction = jest.fn();

            validator(UserSchema, req as Request, {} as Response, next);

            expect(next).toBeCalledTimes(1);
        })
        it('Should throw if body determined to be not ok', () => {
            const mockRequest = {
                body: {
                    "full_name": "Henrique da Silva",
                    "email": "thiagomoura@gmail.com",
                    "email_confirmation": "@gmail.com",
                    "cpf": "826.057.420-91",
                    "cellphone": "(61) 9 8497-7939",
                    "birthdate": "1993-04-21",
                    "email_sms": false,
                    "whatsapp": true,
                    "country": "Alemanha",
                    "city": "Berlim",
                    "postal_code": "61118",
                    "address": "Bad Vilbel",
                    "number": 128,
                },
            } as Request;
            const next: NextFunction = jest.fn();

            const mockResponse: Response = {
                status: jest.fn(() => mockResponse),
                send: jest.fn(),
            } as unknown as Response;

            validator(UserSchema, mockRequest, mockResponse, next);

            expect(next).toBeCalledTimes(0);
        })
    })
});