"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_interface_1 = require("./user.interface");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    role: { type: String,
        enum: Object.values(user_interface_1.Role), default: user_interface_1.Role.USER },
    picture: { type: String },
    status: { type: String,
        enum: Object.values(user_interface_1.Status),
        default: user_interface_1.Status.ACTIVE
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.User = (0, mongoose_1.model)("User", userSchema);
