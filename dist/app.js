"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/module/user/user.route");
const auth_route_1 = require("./app/module/auth/auth.route");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const property_route_1 = require("./app/module/property/property.route");
const stats_route_1 = require("./app/module/stats/stats.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://shine-space-front-end.vercel.app"
    ],
    credentials: true
}));
app.use("/api/v1/user", user_route_1.UserRoutes);
app.use("/api/v1/auth", auth_route_1.AuthRoute);
app.use("/api/v1/property", property_route_1.PropertyRoute);
app.use("/api/v1/stats", stats_route_1.StatsRoute);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to shine space backend"
    });
});
exports.default = app;
