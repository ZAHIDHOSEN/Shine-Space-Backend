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
exports.seedAdmin = void 0;
const user_interface_1 = require("../module/user/user.interface");
const user_model_1 = require("../module/user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASS;
        const isAdminExits = yield user_model_1.User.findOne({ email });
        if (isAdminExits && isAdminExits.role === user_interface_1.Role.ADMIN) {
            console.log("admin already exits");
            return;
        }
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        const createAdmin = yield user_model_1.User.create({
            name: "ZAHID HOSEN",
            email: email,
            password: hashPassword,
            role: user_interface_1.Role.ADMIN
        });
        console.log(createAdmin);
        return createAdmin;
    }
    catch (error) {
        console.log("seed admin error", error);
    }
});
exports.seedAdmin = seedAdmin;
