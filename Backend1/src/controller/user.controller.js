const userService=require("../services/user.service.js")
const getUserProfile=async(req,res)=>{
    
    // console.log("usercontroller")
    try {
        // console.log(req.headers.authorization)
        const jwt=req.headers.authorization?.split(" ")[1];
        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user=await userService.getUserProfileByToken(jwt) 
        // console.log(user)   
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error:error.messsage})
    }
}
const getAllUsers=async(req,res)=>{
    try {
        const users=await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.messsage})
    }
}
module.exports={getUserProfile,getAllUsers}