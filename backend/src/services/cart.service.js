const Cart=require("../models/cart.model.js")
const CartItem=require("../models/cartItem.model.js")
async function createCart(user){
   
    try {
        const cart=new Cart({user});
        const createdCart=await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message)
    }
}
async function findUserCart(userId){
    try{
        let cart=await Cart.findOne({user:user});
        let cartItem=await CartItem.find()
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports={createCart};