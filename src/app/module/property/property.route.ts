import { Router } from "express";
import { PropertyController } from "./property.controller";
import { checkAuth } from "../../middlewares/auth";
import { Role } from "../user/user.interface";




const router = Router()



router.post("/",checkAuth(Role.ADMIN || Role.AGENT),PropertyController.createProperty)
router.patch("/:id",checkAuth(Role.ADMIN || Role.AGENT),PropertyController.updateProperty)
router.delete("/:id",checkAuth(Role.ADMIN || Role.AGENT),PropertyController.deleteProperty)
router.get("/",PropertyController.getAllProperties)


export const PropertyRoute = router