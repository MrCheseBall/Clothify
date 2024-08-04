const mongoose=require('mongoose')
const orderItemSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required: true,
    },
    size:{
        type:String,
    },
    quantity:{
        type:Number,
        reqired:true,
    },
    price:{
        type:Number,
        reqired:true,
    },
    discountedPrice:{
        type:Number,
        reqired:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        reqired:true,
    },
})
const OrderItem=mongoose.model('orderItems',orderItemSchema)
module.exports=OrderItem