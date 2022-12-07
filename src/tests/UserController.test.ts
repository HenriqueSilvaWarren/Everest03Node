import { Request, Response } from 'express';
import { UserController } from "../presentation/controllers/UserController";

describe('UserController', () => {
    it('Should call send to return instructions to user', () => {
        const controller = new UserController();

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