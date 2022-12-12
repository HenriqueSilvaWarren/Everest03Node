import { GetUserController } from "../presentation/controllers/GetUserController"
import { Request, Response } from 'express';

describe('GetUserController', () => {
    it('Should call send to return Users to users', () => {
        const controller = new GetUserController();

        const mockResponse: Response = {
            status: jest.fn(() => mockResponse),
            send: jest.fn(),
        } as unknown as Response;

        const mockRequest: Request = {

        } as unknown as Request;

        controller.handle(mockRequest, mockResponse);

        expect(mockResponse.send).toBeCalledTimes(1);
    })
})