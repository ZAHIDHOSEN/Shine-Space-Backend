import express from "express"
import { AuthController } from "./auth.controller"


const router = express.Router()

router.post("/login",AuthController.loginUser)
router.post("/logOut",AuthController.logOutUser)



export const AuthRoute = router