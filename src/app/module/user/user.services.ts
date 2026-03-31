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



const updateUser = async(userData:Partial<IUser>,id:string)=>{

const user = await User.findByIdAndUpdate(id,userData,{
    new:true,
    runValidators:true

})

return user

    


}




const getAllUsers = async()=>{
   const users = await User.find({})
   const totalUsers = await User.countDocuments()

   return users
}


const getMe = async(id:string)=>{

  const user = await User.findById(id).select("-password")

  return user

}


// user to agents

const promoteToAgent = async (id: string) => {
  const user = await User.findByIdAndUpdate(
    id,
    { role: "AGENT" },
    { new: true, runValidators:true },
    
  ).select("-password");

  return user;
};






export const UserServices = {
    createUser,
    updateUser,
    getAllUsers,
    getMe,
    promoteToAgent
} 