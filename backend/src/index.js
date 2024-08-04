const express=require("express")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    return res.status(200).send({message:"Welcome to ecommerse api -node",status:true})
})
const authRouters=require("./routes/auth.route.js")
app.use("/auth",authRouters);

const userRouters=require("./routes/user.route.js");
app.use("/api/users",userRouters);


const adminProductRouter=require("./routes/adminProduct.route.js")
app.use("/api/admin/products",adminProductRouter)

const orderRouter=require("./routes/order.route.js")
app.use("/api/orders",orderRouter) 

const adminOrderRouter=require("./routes/adminOrder.route.js")
app.use("/api/admin/order",adminOrderRouter)

const reviewRouter=require("./routes/review.route.js")
// app.use("/api/reviews",reviewRouter)

module.exports=app