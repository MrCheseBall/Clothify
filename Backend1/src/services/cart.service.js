const Cart=require("../models/cart.model.js")
// const Product=require("../models/product.model.js")
const CartItem=require("../models/cartItem.model.js");
const Product = require("../models/product.model.js");
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
    try {
        console.log(userId)

        let cart=await Cart.findOne({user:userId});
        console.log(cart)
        let cartItems=await CartItem.find({cart:cart._id}).populate("products");
        cart.cartItems=cartItems;
        let totalPrice=0;
        let totalDiscountedPrice=0;
        let totalItem=0;
        
        for(let cartItem of cart.cartItems){
            totalPrice+=cartItem.price;
            totalDiscountedPrice+=cartItem.discountedPrice;
            totalItem+=cartItem.quantity;
        }
        
        cart.totalPrice=totalPrice;
        cart.totalItem=totalItem;
        cart.discounts=totalPrice-totalDiscountedPrice;
        
        return cart;

    } catch (error) {
        throw new Error(error.message)
    }
}
async function addCardItem(userId,req){
    try {
        // console.log(userId)
        const cart=await Cart.findOne({user:userId});
        // console.log(cart)
        
        // console.log(user)
        const product=await Product.findById(req.productId);
        console.log("1")

        const isPresent = await CartItem.findOne({cart:cart._id,product:product._id,userId})
        if(!isPresent){
            const cartItem=new CartItem({
                products:product._id,
                cart:cart._id,
                quantity:1,
                userId,
                price:product.price,
                size:req.size,
                discountedPrice:product.discountedPrice,
            })
            // console.log(cartItem)
            const createdCartItem=await cartItem.save();
            // console.log("2")
            cart.cartItems.push(createdCartItem);
            await cart.save();
            return "item added to cart"
        }
    } catch (error) {
        
        throw new Error(error.message);
    }
}

module.exports={createCart,addCardItem,findUserCart};