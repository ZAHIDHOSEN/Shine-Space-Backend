import { IProperty } from "./property.interface"
import { Property } from "./property.module"



const createProperty = async(payload:Partial<IProperty>,user:any)=>{
    
    const property = await Property.create({
       title:payload.title,
       description:payload.description,
       price:payload.price,
       location:payload.location,
       images:payload.images,
       agentId:user._id
       
       


    })
    return property
}




const updateProperty = async(payload:Partial<IProperty>,id:string)=>{

   const isPropertyExits = await Property.findById(id)
   
   if(!isPropertyExits){
      return 
   }
   
   const result = await Property.findByIdAndUpdate(id,payload,{
      new:true,
      runValidators:true
     
   })
    
   return result
}




const deleteProperty = async(id:string)=>{

   const isPropertyExits = await Property.findById(id)
   
   if(!isPropertyExits){
      return 
   }

   const result = await Property.findByIdAndDelete(id)

   return result
}

















export const PropertyServices = {
   createProperty,
   updateProperty,
   deleteProperty

}