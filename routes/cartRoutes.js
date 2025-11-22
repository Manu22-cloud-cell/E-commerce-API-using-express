const express=require("express");
const router=express.Router();
const cartController=require("../controllers/cartController")


router.get("/:userID",cartController.getUserCartById);

router.post("/:userID",cartController.postCartByUserId);

module.exports=router;
