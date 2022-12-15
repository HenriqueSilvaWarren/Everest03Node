import app from "../presentation/app";
import supertest from "supertest";
import status from 'http-status';
const request = supertest(app);

describe('GET /customer', () => {
    it('Content type should be json and body should be []', async () => {
        const res = await request
            .get('/customer')
            .expect('Content-Type', /json/)
            .expect(status.OK);
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
                "birthdate": "2012-04-23T00:00:00.000Z",
                "email_sms": false,
                "whatsapp": true,
                "country": "Alemanha",
                "city": "Berlim",
                "postal_code": "61118",
                "address": "Bad Vilbel",
                "number": 128,
            })
            .expect('Content-Type', /json/)
            .expect(status.CREATED);

        expect(res.text).toStrictEqual('\"Usuário criado com sucesso!\"');
    });

    it('if no data is sent should send error back', async () => {
        const res = await request
            .post('/customer')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(status.BAD_REQUEST);

        expect(res.text).toContain('is required');
    },);

    it('If email and email confirmation are not equal send error back', async () => {
        const res = await request
            .post('/customer')
            .send({
                "full_name": "Henrique da Silva",
                "email": "thiagomoura@gmail.com",
                "email_confirmation": "thiagomoura@.com",
                "cpf": "826.057.420-91",
                "cellphone": "(61) 9 8497-7939",
                "birthdate": "2012-04-23",
                "email_sms": false,
                "whatsapp": true,
                "country": "Alemanha",
                "city": "Berlim",
                "postal_code": "61118",
                "address": "Bad Vilbel",
                "number": 128,
            })
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(status.BAD_REQUEST);

        expect(res.text).toStrictEqual('"email_confirmation" must be [ref:email]');
    });
    it('if strings are not sent correctly should throw error', async () => {
        const res = await request
            .post('/customer')
            .send({
                "full_name": 1,
                "email": 1,
                "email_confirmation": 1,
                "cpf": 1,
                "cellphone": 1,
                "birthdate": '2012-04-23',
                "email_sms": false,
                "whatsapp": true,
                "country": 1,
                "city": 1,
                "postal_code": 1,
                "address": 1,
                "number": 128,
            })
            .expect(status.BAD_REQUEST);

        expect(res.text).toContain('must be a string');
        expect(res.text).not.toContain('must be a int');
    });
    it('if numbers are not sent correctly should throw error', async () => {
        const res = await request
            .post('/customer')
            .send({
                "full_name": 'Henrique da Silva',
                "email": "thiagomoura@gmail.com",
                "email_confirmation": "thiagomoura@gmail.com",
                "cpf": "826.057.420-91",
                "cellphone": '(61) 9 8497-7939',
                "birthdate": '2012-04-23',
                "email_sms": false,
                "whatsapp": true,
                "country": 'Alemanha',
                "city": 'Berlim',
                "postal_code": '61118',
                "address": 'Bad Vilbel',
                "number": 'a',
            })
            .expect(status.BAD_REQUEST);

        expect(res.text).not.toContain('must be a string');
        expect(res.text).toContain('must be a number');
    });

    it('if bool are not sent correctly should throw error', async () => {
        const res = await request
            .post('/customer')
            .send({
                "full_name": 'Henrique da Silva',
                "email": "thiagomoura@gmail.com",
                "email_confirmation": "thiagomoura@gmail.com",
                "cpf": "826.057.420-91",
                "cellphone": '(61) 9 8497-7939',
                "birthdate": '2012-04-23',
                "email_sms": 1,
                "whatsapp": true,
                "country": 'Alemanha',
                "city": 'Berlim',
                "postal_code": '61118',
                "address": 'Bad Vilbel',
                "number": 128,
            })
            .expect(status.BAD_REQUEST);

        expect(res.text).toContain('must be a bool');
    });

});