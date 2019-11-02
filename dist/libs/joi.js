"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.signupValidation = (data) => {
    const userSchema = joi_1.default.object({
        username: joi_1.default
            .string()
            .min(4)
            .max(30)
            .required(),
        email: joi_1.default
            .string()
            .required(),
        password: joi_1.default
            .string()
            .min(6)
            .required(),
    });
    return userSchema.validate(data);
};
exports.signinValidation = (data) => {
    const userSchema = joi_1.default.object({
        email: joi_1.default
            .string()
            .required(),
        password: joi_1.default
            .string()
            .min(6)
            .required(),
    });
    return userSchema.validate(data);
};
//# sourceMappingURL=joi.js.map