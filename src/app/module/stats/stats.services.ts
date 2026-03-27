import { Property } from "../property/property.module"
import { User } from "../user/user.model"



const getAllStats = async()=>{
    const totalUsers = await User.countDocuments()
    const totalAgents = await User.countDocuments({role:"AGENT"})
    const totalProperty = await Property.countDocuments()

    const availableProperty = await Property.countDocuments({
        status:"AVAILABLE"
    })

    return {
        totalAgents,
        totalProperty,
        totalUsers,
        availableProperty
    }

}











export const StatsServices = {
  getAllStats
}