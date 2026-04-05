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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsServices = void 0;
const property_module_1 = require("../property/property.module");
const user_model_1 = require("../user/user.model");
const getAllStats = () => __awaiter(void 0, void 0, void 0, function* () {
    const totalUsers = yield user_model_1.User.countDocuments();
    const totalAgents = yield user_model_1.User.countDocuments({ role: "AGENT" });
    const totalProperty = yield property_module_1.Property.countDocuments();
    const availableProperty = yield property_module_1.Property.countDocuments({
        status: "AVAILABLE"
    });
    return {
        totalAgents,
        totalProperty,
        totalUsers,
        availableProperty
    };
});
exports.StatsServices = {
    getAllStats
};
