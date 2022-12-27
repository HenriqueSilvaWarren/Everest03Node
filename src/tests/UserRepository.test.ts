import UserModel from "../domain/entities/UserModel";
import { UserRepository } from "../infra/repositories/UserRepository";

describe('UserRepository', () => {
    describe('create', () => {
        it('Should create a user inside Users and return correct model', () => {
            const model = new UserModel({
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
            });
            const repo = new UserRepository();
            const result = repo.create(model);

            expect(result).toBe(model);
        })
    })
});