import app from "../presentation/app";
import supertest from "supertest";

const request = supertest(app);

describe('GET /customer', () => {
    it('Content type should be json and body should be []', async () => {
        const res = await request
            .get('/customer')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(res.body).toStrictEqual([]);
    })
});

describe('POST /customer', () => {
    it('Content type should be json and body should return successful message', async () => {
        const res = await request
            .post('/customer')
            .send({
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
            })
            .expect('Content-Type', /text\/html/)
            .expect(201);
        expect(res.text).toStrictEqual('Usuário criado com sucesso!');
    })
});