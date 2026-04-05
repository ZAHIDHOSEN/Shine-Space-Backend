"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const mongoose_1 = require("mongoose");
const property_interface_1 = require("./property.interface");
const propertySchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        area: { type: String, required: true },
    },
    propertyType: {
        type: String,
        enum: Object.values(property_interface_1.isPropertyType),
        default: property_interface_1.isPropertyType.APARTMENT
    },
    images: { type: String, required: true },
    status: {
        type: String,
        enum: Object.values(property_interface_1.isStatus),
        default: property_interface_1.isStatus.AVAILABLE
    },
    agentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, { timestamps: true });
exports.Property = (0, mongoose_1.model)("Property", propertySchema);
