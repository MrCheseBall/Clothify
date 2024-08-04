

const express=require("express")
const router=express.Router();

const OrderController=require("../controller/order.controller");
const { authenticate } = require("../middleware/authenticate");

router.post("/",authenticate,OrderController.createOrder)
router.post("/",authenticate,OrderController.orderHistory)
router.post("/",authenticate,OrderController.findOrderById)

module.exports=router;