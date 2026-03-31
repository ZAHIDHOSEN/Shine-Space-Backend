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


const getAllProperties = async (query: any) => {
  const filter: any = {};

  // 🌆 city filter
  if (query.city) {
    filter["location.city"] = query.city;
  }

  // 🏷️ type filter
  if (query.propertyType) {
    filter.propertyType = query.propertyType;
  }

  // 💰 price filter
  if (query.minPrice || query.maxPrice) {
    filter.price = {};
    if (query.minPrice) filter.price.$gte = Number(query.minPrice);
    if (query.maxPrice) filter.price.$lte = Number(query.maxPrice);
  }

  const properties = await Property.find(filter).populate(
    "agentId",
    "name email role"
  );

  return properties;
};



const getSingleProperty = async(id:string)=>{
   const property = await Property.findById(id)

   return property
}














export const PropertyServices = {
   createProperty,
   updateProperty,
   deleteProperty,
   getAllProperties,
   getSingleProperty

}