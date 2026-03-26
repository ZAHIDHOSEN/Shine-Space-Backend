import { IProperty } from "./property.interface"
import { Property } from "./property.module"



const createProperty = async(payload:Partial<IProperty>,user:any)=>{
    
    const property = await Property.create({
       title:payload.title,
       description:payload.description,
       price:payload.price,
       location:payload.location,
       images:payload.images,
       agentId:user.id
       
       


    })
    return property
}

















export const PropertyServices = {
   createProperty
}