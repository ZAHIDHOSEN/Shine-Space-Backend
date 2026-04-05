"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middlewares/auth");
const user_interface_1 = require("./user.interface");
const router = express_1.default.Router();
router.post("/", user_controller_1.UserController.createUsers);
router.patch("/:id", (0, auth_1.checkAuth)(), user_controller_1.UserController.updateUsers);
router.get("/", (0, auth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.AGENT), user_controller_1.UserController.getAllUsers);
router.get("/me", (0, auth_1.checkAuth)(), user_controller_1.UserController.getMe);
router.patch("/create-agent/:id", (0, auth_1.checkAuth)(user_interface_1.Role.ADMIN), user_controller_1.UserController.promoteToAgent);
exports.UserRoutes = router;
