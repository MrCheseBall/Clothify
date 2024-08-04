const userService=require("../services/user.service.js")
const jwtProvider=require("../config/jwtProvider.js")
const cartService=require("../services/cart.service.js")
const bcrypt=require("bcrypt")
const register=async(req,res)=>{
    try {
        // console.log(req.body)
        const user=await userService.createUser(req.body);
        // console.log("3")
        // console.log(user)
        const jwt=jwtProvider.generateToken(user._id);

        await cartService.createCart(user);
        return res.status(200).send({jwt,message:"register success"})
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
};
const login=async(req,res)=>{
    // console.log("login")
    const {password,email}=req.body;
    try {
        
        const user=await userService.getUserByEmail(email);
        // console.log("login wala user token--------------------",user._id)
        if(!user){
            return res.status(404).send({message:"user not found with email : ",email});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);  
        if(!isPasswordValid){
            return res.status(401).send({message:"Invalid password..."})  
        }
        const jwt=jwtProvider.generateToken(user._id);
        // console.log("login wala user token--------------------",jwt)

        // console.log("login2")
        return res.status(200).send({ jwt,  message:"Login success"})
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports={register,login}
