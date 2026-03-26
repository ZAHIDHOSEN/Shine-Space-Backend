import { catchAsync } from "../../utils/catchAsync";
import { Request,Response,NextFunction } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes"
import { AuthServices } from "./auth.services";

const loginUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
       const payload = req.body
       const loginInfo = await AuthServices.loginUser(payload)


      sendResponse(res,{
            success: true,
            statusCode: httpStatus.ACCEPTED,
            message: "login Successfully",
            data:loginInfo ,
      })
})



const logOutUser =  catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
   


      sendResponse(res,{
            success: true,
            statusCode: httpStatus.ACCEPTED,
            message: " Successfully",
            data:{} ,
      })

})



export const AuthController = {
    loginUser,
    logOutUser
}