import { Router } from "express";
import { StatsController } from "./stats.controller";
import { checkAuth } from "../../middlewares/auth";
import { Role } from "../user/user.interface";



const router = Router()


router.get("/",checkAuth(Role.ADMIN,Role.AGENT),StatsController.getAllStats)



export const StatsRoute = router