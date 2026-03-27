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
const updateUsers = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

  const userData = req.body
  const id = req.params.id as string
  // const id = req.user 
  
  const user = await UserServices.updateUser(userData,id)


  sendResponse(res,{
        success: true,
        statusCode: httpStatus.CREATED,
        message: "userUpdated Successfully",
        data: user,
  })
    

})


const getAllUsers = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{


  
  const users = await UserServices.getAllUsers()


  sendResponse(res,{
        success: true,
        statusCode: httpStatus.CREATED,
        message: "getAllUsers get Successfully",
        data: users,
  })
    

})


const getMe = catchAsync(async (req, res) => {
  const userId = req.user._id;

  const user = await UserServices.getMe(userId)

  // const user = await User.findById(userId).select("-password");

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User fetched successfully",
    data: user,
  });
});










export const UserController  ={
  createUsers,
  updateUsers,
  getAllUsers,
  getMe
}