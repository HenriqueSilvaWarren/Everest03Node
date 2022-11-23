"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = require("./presentation/Routes");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({
    extended: false
}));
app.use(express_1.default.json());
app.use("/", Routes_1.router);
app.use("/customer", Routes_1.customerRouter);
app.listen(3000);
