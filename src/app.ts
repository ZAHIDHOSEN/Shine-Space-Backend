import express, { Request, Response } from "express"
import cors from "cors"
import { UserRoutes } from "./app/module/user/user.route"






const app = express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))


app.use("/api/v1/user",UserRoutes)


app.get("/",(req:Request,res:Response)=>{
    
    res.status(200).json({
        message:"welcome to shine space backend"
    })

})


export default app