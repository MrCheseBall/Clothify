const orderService=require("../services/order.service.js")

const createOrder=async(req,res)=>{
    const user= await req.user;
    try {
        let createdOrder=await orderService.createOrder(user,req.body)
        console.log("1")
        return res.status(200).send(createdOrder)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const findOrderById=async(req,res)=>{
    const user=await req.user;
    try {
        let findOrder=await orderService.findOrderById(req.params.id)
        return res.status(200).send(findOrder)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const orderHistory=async(req,res)=>{
    const user=await req.user;
    try {
        let Order=await orderService.userOrderHistory(user._id)
        return res.status(200).send(Order)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
module.exports={
    createOrder,
    findOrderById,
    orderHistory
}