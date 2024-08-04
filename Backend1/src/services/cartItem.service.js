const userService=require("../services/user.service.js")
const CartItem=require("../models/cartItem.model.js");

async function updateCartItem(userId,cartItemId,cartItemData){
    try {
        const item=await findCartItemById(cartItemId);
        // console.log(item.products.price)
        if(!item){
            throw new Error("cart item not found : ",cartItemId)
        }
        const user =await userService.findUserById(item.userId);
        if(user._id.toString()===userId.toString()){
            item.quantity=cartItemData.quantity;
            item.price=item.quantity*item.products.price;
            item.discountedPrice=item.quantity*item.products.discountedPrice;
            const updatedCartItem=await item.save();
            return updatedCartItem;
        }
        else{
            throw new Error("you cant update this cart item")
        }
    } catch (error) {
        throw new Error(error.message);
    }
    
}
async function removeCartItem(userId,cartItemId){
    try {
        const cartItem=await findCartItemById(cartItemId);
        const user=await userService.findUserById(userId);
        // console.log(user._id.toString(),"hellll",cartItem.userId.toString())
        if(user._id.toString()===cartItem.userId.toString()){
            return await CartItem.findByIdAndDelete(cartItemId)
        }
            throw new Error("you cant remove another user's item")

        
    } catch (error) {
        throw new Error(error.message);
    }
   
}
async function findCartItemById(cartItemId){
    const cartItem=await CartItem.findById(cartItemId).populate("products");
    if(cartItem){
        return cartItem;
    }
    else{
        throw new Error("CartItem not found with id ",cartItemId)
    }
}
module.exports={updateCartItem,removeCartItem,findCartItemById}