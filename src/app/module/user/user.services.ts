import { IUser } from "./user.interface"
import { User } from "./user.model"
import bcrypt from "bcrypt"

const createUser = async(userData:Partial<IUser>) =>{
   
    const {email,password,role,...rest} = userData

    const isUserExits = await User.findOne({email})

    if(isUserExits){
        throw new Error("user already exists")
    }

    const hashPassword = await bcrypt.hash(password as string,10)

    const user = await User.create({
        email,
        password:hashPassword,
        role,
        ...rest
    })


    return user
}





export const UserServices = {
    createUser
} 