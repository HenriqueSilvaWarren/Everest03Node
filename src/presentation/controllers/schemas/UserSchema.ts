import validator from "cpf-cnpj-validator";
import Joi = require("joi");

const joi = Joi.extend(validator);

export const UserSchema = joi.object({
    full_name: joi.string().required(),
    email: joi.string().email().required(),
    email_confirmation: joi.ref('email'),
    cpf: joi.document().cpf().required(),
    cellphone: joi.string().required(),
    birthdate: joi.date().required(),
    email_sms: joi.boolean().required(),
    whatsapp: joi.boolean().required(),
    country: joi.string().required(),
    city: joi.string().required(),
    postal_code: joi.string().required(),
    address: joi.string().required(),
    number: joi.number().required(),
}).with('email', 'email_confirmation');
