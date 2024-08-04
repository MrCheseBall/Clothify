const cartService=require("../services/cart.service")

const findUserCart = async(req,res)=>{
    const user=req.user;
    try {
        const cart=await cartService.findUserCart(user._id);
        console.log("222")
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}

const addItemToCart = async(req,res)=>{
 

    // console.log(req.user)

    const user=req.user;
    try {
    console.log(req.body)

        const cartItem=await cartService.addCardItem(user._id,req.body);
        
        console.log("find")

        return res.status(200).send(cartItem)
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}
module.exports={
    findUserCart,
    addItemToCart
}