import { customContainer } from "../di";
import { UserService } from '../domain/user/services/UserService';

describe('UserService', () => {
    describe('saveUser', () => {
        it('Should create a model based on object provided and should call repository function', () => {
            const record = {
                full_name: "Henrique da Silva",
                email: "thiagomoura@gmail.com",
                email_confirmation: "thiagomoura@gmail.com",
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
            };
            const service = customContainer.resolve(UserService);
            const spyUserService = jest.spyOn(service, 'saveUser');

            service.saveUser(record);

            expect(spyUserService).toHaveBeenCalledTimes(1);
        })
    })
});