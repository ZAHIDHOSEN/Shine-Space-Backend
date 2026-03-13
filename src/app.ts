import express, { Request, Response } from "express"
import cors from "cors"






const app = express()
app.use(express.json())


// app.use("/api/v1")


app.get("/",(req:Request,res:Response)=>{
    
    res.status(200).json({
        message:"welcome to shine space backend"
    })

})


export default app