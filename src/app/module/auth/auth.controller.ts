import { catchAsync } from "../../utils/catchAsync";
import { Request,Response,NextFunction } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes"
import { AuthServices } from "./auth.services";
import { setAuthCookie } from "../../utils/setCookie";

const loginUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
       const payload = req.body
       const loginInfo = await AuthServices.loginUser(payload)
        
       setAuthCookie(res,loginInfo)

      sendResponse(res,{
            success: true,
            statusCode: httpStatus.ACCEPTED,
            message: "login Successfully",
            data:loginInfo ,
      })
})



const logOutUser =  catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
      
    res.clearCookie("accessToken",{
    httpOnly:true,
    secure: false,
    sameSite:"lax"
   })
   res.clearCookie("refreshToken",{
    httpOnly:true,
    secure: false,
    sameSite:"lax"
   })
     

      sendResponse(res,{
            success: true,
            statusCode: httpStatus.ACCEPTED,
            message: "logout Successfully",
            data:null ,
      })

})



export const AuthController = {
    loginUser,
    logOutUser
}