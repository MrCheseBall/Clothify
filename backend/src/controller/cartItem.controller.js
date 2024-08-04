const CartItemService=require("../services/cartItem.service.js")
const updatecartItem =async(req,res)=>{
    const user=req.user;
    try {
        const updatedCartItem=await CartItemService.updateCartItem(user._id,req.params.id,req.body)
        return req.status(200).send(updatedCartItem)
    } catch (error) {
        return req.status(500).send({error:error.message})
    }
}

const removeCartItem =async(req,res)=>{
    const user=req.user;
    try {
        await CartItemService.removeCartItem(user._id,req.params.id)
        return req.status(200).send({message:"cart item removed successfuly"})
    } catch (error) {
        return req.status(500).send({error:error.message})
    }
}

module.exports={
    updatecartItem,
    removeCartItem
}