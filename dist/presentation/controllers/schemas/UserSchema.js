"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const cpf_cnpj_validator_1 = __importDefault(require("cpf-cnpj-validator"));
const Joi = require("joi");
const joi = Joi.extend(cpf_cnpj_validator_1.default);
exports.UserSchema = joi.object({
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
