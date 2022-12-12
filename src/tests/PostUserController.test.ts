import { customContainer } from "../di";
import { PostUserController } from "../presentation/controllers/PostUserController";
import { Request, Response } from 'express';

describe('PostUserController', () => {
    it('Should call res.status.send if all other operations are successful', () => {
        const mockRequest: Request = {
            body: {
                full_name: "Henrique da Silva",
                email: "thiagomoura@gmail.com",
                email_confirmation: "@gmail.com",
                cpf: "826.057.420-91",
                cellphone: "(61) 9 8497-7939",
                birthdate: "1993-04-21",
                email_sms: false,
                whatsapp: true,
                country: "Alemanha",
                city: "Berlim",
                postal_code: "61118",
                address: "Bad Vilbel",
                number: 128,
            }
        } as unknown as Request;

        const mockResponse: Response = {
            status: jest.fn(() => mockResponse),
            send: jest.fn(),
        } as unknown as Response;

        const controller = customContainer.resolve(PostUserController);

        controller.handle(mockRequest, mockResponse);

        expect(mockResponse.send).toBeCalledTimes(1);
    })
    it('Should call res.status.send if all other operations are successful', () => {
        const mockRequest: Request = {
        } as unknown as Request;
        const mockResponse: Response = {
            status: jest.fn(() => mockResponse),
            send: jest.fn(),
        } as unknown as Response;
        const controller = customContainer.resolve(PostUserController);
        controller.handle(mockRequest, mockResponse);

        expect(mockResponse.status).toBeCalledWith(500);
        expect(mockResponse.send).toBeCalledTimes(1);
    })
})