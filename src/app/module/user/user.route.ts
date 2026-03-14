import express from "express"
import { UserController } from "./user.controller"



const router = express.Router()

router.post("/",UserController.createUsers)
router.patch("/:id",UserController.updateUsers)
router.get("/",UserController.getAllUsers)


export const UserRoutes = router