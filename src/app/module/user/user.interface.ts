
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    AGENT = "AGENT"
}

export enum Status {
    ACTIVE ="ACTIVE",
    BLOCKED ="BLOCKED"
}


export interface IUser {
    name : string
    email: string 
    password ?: string
    role : Role
    phone ?: string
    picture ?: string
    status ?: Status
    
   

}