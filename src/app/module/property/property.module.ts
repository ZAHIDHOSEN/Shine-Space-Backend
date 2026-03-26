import { model, Schema } from "mongoose";
import { IProperty, isPropertyType, isStatus } from "./property.interface";

 
 
 const propertySchema = new Schema<IProperty>({
    title:{type:String,required:true,trim:true},
    description:{type:String,required:true},
    price:{type:Number,required:true,min:0},
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      area: { type: String, required: true },
    },
    propertyType:{
        type:String,
        enum:Object.values(isPropertyType),
        default: isPropertyType.APARTMENT
    },
    images:{type:String,required:true},
    status:{
        type:String,
        enum:Object.values(isStatus),
        default:isStatus.AVAILABLE
    },
    
    agentId:{
      type: Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    
},{timestamps:true})



export const Property = model<IProperty>("Property",propertySchema)