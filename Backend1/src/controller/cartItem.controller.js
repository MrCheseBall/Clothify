const CartItemService=require("../services/cartItem.service.js")
const updatecartItem =async(req,res)=>{
    const user=req.user;
    try {
        const updatedCartItem=await CartItemService.updateCartItem(user._id,req.params.id,req.body)
        return res.status(200).send(updatedCartItem)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const removeCartItem =async(req,res)=>{
    const user=await req.user;
    // console.log("id ",req.params.id)
    try {
        await CartItemService.removeCartItem(user._id,req.params.id)
        return res.status(200).send({message:"cart item removed successfuly"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={
    updatecartItem,
    removeCartItem
}