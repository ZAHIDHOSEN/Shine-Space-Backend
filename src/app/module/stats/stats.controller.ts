import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StatsServices } from "./stats.services";
import httpStatus from "http-status-codes"


const getAllStats = catchAsync(async (req:Request, res:Response) => {
  
    const result = await StatsServices.getAllStats()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "stats data fetch successfully",
    data:result
  });
});






export const StatsController = {
   getAllStats
}