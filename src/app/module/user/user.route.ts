import express from "express"
import { UserController } from "./user.controller"



const router = express.Router()

router.post("/",UserController.createUsers)


export const UserRoutes = router