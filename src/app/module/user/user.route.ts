import express from "express"
import { UserController } from "./user.controller"
import { checkAuth } from "../../middlewares/auth"
import { Role } from "./user.interface"



const router = express.Router()

router.post("/",UserController.createUsers)
router.patch("/:id",checkAuth(),UserController.updateUsers)
router.get("/",checkAuth(Role.ADMIN),UserController.getAllUsers)
router.get("/me",checkAuth(),UserController.getMe)


export const UserRoutes = router