const express=require("express");
const router=express.Router();
const productsController=require('../controllers/productsController');


router.get("/",productsController.getProducts);

router.post("/",productsController.postProducts);

router.get("/:id",productsController.getProductsById);

router.put("/:id",productsController.editProducts);

router.delete("/:id",productsController.deleteProductsById)

module.exports=router;