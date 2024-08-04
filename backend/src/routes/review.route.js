
const express=require("express")
const router=express.Router();
const authenticate=require("../middleware/authenticate")
const reviewController=require("../controller/review.controller")

router.post("/create",reviewController.createReview)
// router.get("/product/:productId",authenticate,reviewController.getAllReview)

module.exports=router;