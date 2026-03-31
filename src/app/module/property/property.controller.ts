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


const updateProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string
    const payload = req.body
    const property = await PropertyServices.updateProperty(payload,id)



  sendResponse(res,{
        success: true,
        statusCode: httpStatus.CONTINUE,
        message: "property updated Successfully",
        data: property,
  })
    

})


const deleteProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string
   
    const property = await PropertyServices.deleteProperty(id)



  sendResponse(res,{
        success: true,
        statusCode: httpStatus.CONTINUE,
        message: "property deleted Successfully",
        data: null,
  })
    

})


const getAllProperties = catchAsync(async (req:Request,res:Response,next:NextFunction) => {
  const data = await PropertyServices.getAllProperties(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Properties fetched successfully",
    data,
  });
});




const getSingleProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string
   
    const property = await PropertyServices.getSingleProperty(id)



  sendResponse(res,{
        success: true,
        statusCode: httpStatus.CONTINUE,
        message: "single property fetch Successfully",
        data: property,
  })
    

})












export const PropertyController = {
   createProperty,
   updateProperty,
   deleteProperty,
   getAllProperties,
   getSingleProperty
}