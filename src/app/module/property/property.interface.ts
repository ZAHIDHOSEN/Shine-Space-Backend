import { Types } from "mongoose"


export enum isPropertyType {
    APARTMENT ="APARTMENT",
    LAND="LAND",
    HOUSE="HOUSE"
}


export enum isStatus {
    AVAILABLE="AVAILABLE",
    RENTED="RENTED",
    SOLD="SOLD"
}

export interface IProperty {
    title: string,
    description: string,
    price: number,
    location: {
        address: string,
        city: string,
        area: string
    },
   propertyType: isPropertyType,
   status:isStatus,
   images:string,
   agentId: Types.ObjectId;


}