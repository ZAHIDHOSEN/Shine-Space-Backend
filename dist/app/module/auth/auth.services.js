"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const jwt_1 = require("../../utils/jwt");
const user_model_1 = require("../user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isUserExits = yield user_model_1.User.findOne({ email });
    if (!isUserExits) {
        throw new Error("user does not esits in db");
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(password, isUserExits.password);
    if (!isPasswordMatch) {
        throw new Error("password does not match");
    }
    const jwtPayload = {
        _id: isUserExits._id,
        email: isUserExits.email,
        role: isUserExits.role
    };
    const userWithOutPassword = isUserExits.toObject();
    delete userWithOutPassword.password;
    const accessToken = (0, jwt_1.createToken)(jwtPayload, process.env.JWT_ACCESS_SECRET, process.env.JWT_ACCESS_EXPIRES);
    const refreshToken = (0, jwt_1.createToken)(jwtPayload, process.env.JWT_REFRESH_SECRET, process.env.JWT_REFRESH_EXPIRES);
    return {
        userWithOutPassword,
        accessToken,
        refreshToken
    };
});
const logOutUser = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.AuthServices = {
    loginUser,
    logOutUser
};
