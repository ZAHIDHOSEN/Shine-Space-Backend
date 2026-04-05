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
exports.PropertyServices = void 0;
const property_module_1 = require("./property.module");
const createProperty = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const property = yield property_module_1.Property.create({
        title: payload.title,
        description: payload.description,
        price: payload.price,
        location: payload.location,
        images: payload.images,
        agentId: user._id
    });
    return property;
});
const updateProperty = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const isPropertyExits = yield property_module_1.Property.findById(id);
    if (!isPropertyExits) {
        return;
    }
    const result = yield property_module_1.Property.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return result;
});
const deleteProperty = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isPropertyExits = yield property_module_1.Property.findById(id);
    if (!isPropertyExits) {
        return;
    }
    const result = yield property_module_1.Property.findByIdAndDelete(id);
    return result;
});
const getAllProperties = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    // 🌆 city filter
    if (query.city) {
        filter["location.city"] = query.city;
    }
    // 🏷️ type filter
    if (query.propertyType) {
        filter.propertyType = query.propertyType;
    }
    // 💰 price filter
    if (query.minPrice || query.maxPrice) {
        filter.price = {};
        if (query.minPrice)
            filter.price.$gte = Number(query.minPrice);
        if (query.maxPrice)
            filter.price.$lte = Number(query.maxPrice);
    }
    const properties = yield property_module_1.Property.find(filter).populate("agentId", "name email role");
    return properties;
});
const getSingleProperty = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const property = yield property_module_1.Property.findById(id).populate("agentId", "name email role");
    return property;
});
exports.PropertyServices = {
    createProperty,
    updateProperty,
    deleteProperty,
    getAllProperties,
    getSingleProperty
};
