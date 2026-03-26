import mongoose from "mongoose"
import {Server} from "http"
import app from "./app"
import dotenv from "dotenv"
import { seedAdmin } from "./app/utils/seedAdmin"


dotenv.config()


let server: Server

const startServer = async()=>{
    try {

        await mongoose.connect(process.env.DB_URL as string)
        console.log("connect to db")

        server = app.listen((process.env.PORT),()=>{
            console.log(`server is listening to port:${process.env.PORT}`)
            
        })
        await seedAdmin()

        
    } catch (error) {
        console.log(error,"mongodb connection failed")
    }
}



startServer()

