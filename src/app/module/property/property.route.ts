import { Router } from "express";
import { PropertyController } from "./property.controller";




const router = Router()



router.post("/",PropertyController.createProperty)




export const PropertyRoute = router