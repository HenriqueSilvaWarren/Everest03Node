"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.customerRouter = (0, express_1.Router)();
const UserController_1 = require("./controllers/UserController");
const PostUserController_1 = require("./controllers/PostUserController");
const GetUserController_1 = require("./controllers/GetUserController");
const validator_1 = require("../middlewares/validator");
const UserSchema_1 = require("./controllers/schemas/UserSchema");
exports.router.get("/", UserController_1.UserController.handle);
exports.customerRouter.post("/", (0, validator_1.validator)(UserSchema_1.UserSchema), PostUserController_1.PostUserController.handle);
exports.customerRouter.get("/", GetUserController_1.GetUserController.handle);