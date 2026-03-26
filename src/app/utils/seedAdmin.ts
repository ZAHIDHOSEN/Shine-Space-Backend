import { Role } from "../module/user/user.interface"
import { User } from "../module/user/user.model"
import bcrypt from "bcrypt"


export const seedAdmin = async()=>{

  try {
    const email = process.env.ADMIN_EMAIL
     const password = process.env.ADMIN_PASS

     const isAdminExits = await User.findOne({email})

     if(isAdminExits && isAdminExits.role === Role.ADMIN){
        console.log("admin already exits")
        return 
        
     }

     const hashPassword = await bcrypt.hash(password as string,10)

     const createAdmin = await User.create({
        name:"ZAHID HOSEN",
        email:email,
        password:hashPassword,
        role:Role.ADMIN
     })
     console.log(createAdmin)

     return createAdmin
        
    } catch (error) {
        console.log("seed admin error",error)
    }
 
}