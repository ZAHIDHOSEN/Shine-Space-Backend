import express from "express"
import { UserController } from "./user.controller"
import { checkAuth } from "../../middlewares/auth"
import { Role } from "./user.interface"



const router = express.Router()

router.post("/",UserController.createUsers)
router.patch("/:id",UserController.updateUsers)
router.get("/",checkAuth(Role.ADMIN),UserController.getAllUsers)


export const UserRoutes = router