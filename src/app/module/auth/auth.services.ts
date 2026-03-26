import { createToken } from "../../utils/jwt"
import { IUser } from "../user/user.interface"
import { User } from "../user/user.model"
import bcrypt from "bcrypt"



const loginUser = async(payload:Partial<IUser>)=>{
    const {email,password} = payload


    const isUserExits = await User.findOne({email})

    if(!isUserExits){
        throw new Error("user does not esits in db")
    }

    const isPasswordMatch = await bcrypt.compare(password as string, isUserExits.password as string)

    if(!isPasswordMatch){
        throw new Error("password does not match")
    }

    const jwtPayload = {
        id:isUserExits.id,
        email:isUserExits.email,
        role:isUserExits.role
      

    }

    const userWithOutPassword = isUserExits.toObject()
    delete userWithOutPassword.password

    const accessToken = createToken(jwtPayload,process.env.JWT_ACCESS_SECRET as string,process.env.JWT_ACCESS_EXPIRES as string)
    const refreshToken = createToken(jwtPayload,process.env.JWT_REFRESH_SECRET as string,process.env.JWT_REFRESH_EXPIRES as string)

    return {
        userWithOutPassword,
        accessToken,
        refreshToken
        
        
    }
}



const logOutUser = async()=>{

}


export const AuthServices = {
    loginUser,
    logOutUser
}