"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const ramda_1 = require("ramda");
const joi_1 = __importDefault(require("joi"));
exports.validator = (0, ramda_1.curryN)(4, (schema, req, res, next) => {
    try {
        joi_1.default.assert(req.body, schema);
        next();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
