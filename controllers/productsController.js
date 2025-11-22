const {
    getProductsService,
    getProductsByIdService,
    postProductsService,
    editProductsService,
    deleteProductsByIdService
} = require("../services/productServices")

const getProducts=(req,res)=>{
    const filePath = getProductsService();
    res.sendFile(filePath);
};

const getProductsById=(req,res)=>{
    const id=req.params.id;
    const result=getProductsByIdService(id);
    res.send(result);
};

const postProducts=(req,res)=>{
    const result=postProductsService(req);
    res.json({value:result.productName});
};

const editProducts=(req,res)=>{
    const result=editProductsService();
    res.send(result);
};

const deleteProductsById=(req,res)=>{
    const result=deleteProductsByIdService();
    res.send(result);
};

module.exports={
    getProducts,
    getProductsById,
    postProducts,
    editProducts,
    deleteProductsById
};