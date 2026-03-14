import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { UserServices } from "./user.services"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes"


const createUsers = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

  const userData = req.body
  const user = await UserServices.createUser(userData)


  sendResponse(res,{
        success: true,
        statusCode: httpStatus.CREATED,
        message: "userCreated Successfully",
        data: user,
  })
    

})









export const UserController  ={
  createUsers
}