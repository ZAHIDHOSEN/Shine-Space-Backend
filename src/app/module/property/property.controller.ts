import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes"
import { PropertyServices } from "./property.services"

const createProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const user = req.user
    const payload = req.body
    const property = await PropertyServices.createProperty(payload,user)



  sendResponse(res,{
        success: true,
        statusCode: httpStatus.CREATED,
        message: "property created Successfully",
        data: property,
  })
    

})












export const PropertyController = {
   createProperty
}