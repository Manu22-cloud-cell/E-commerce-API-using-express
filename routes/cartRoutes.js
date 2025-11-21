const express=require("express");
const router=express.Router();

router.get("/:userID",(req,res)=>{
    const id=req.params.userID;
    res.send(`Fetching cart for user with ID: ${id}`)
});

router.post("/:userID",(req,res)=>{
    const id=req.params.userID;
    res.send(`Adding product to cart for user with ID: ${id}`)
});

module.exports=router;
