"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatus = exports.isPropertyType = void 0;
var isPropertyType;
(function (isPropertyType) {
    isPropertyType["APARTMENT"] = "APARTMENT";
    isPropertyType["LAND"] = "LAND";
    isPropertyType["HOUSE"] = "HOUSE";
})(isPropertyType || (exports.isPropertyType = isPropertyType = {}));
var isStatus;
(function (isStatus) {
    isStatus["AVAILABLE"] = "AVAILABLE";
    isStatus["RENTED"] = "RENTED";
    isStatus["SOLD"] = "SOLD";
})(isStatus || (exports.isStatus = isStatus = {}));
