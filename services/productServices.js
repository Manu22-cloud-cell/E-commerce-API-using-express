const path=require('path');

//using path module to return the html file via services to controller
const getProductsService=()=>{
    return path.join(__dirname,"..","views","products.html");
};

const getProductsByIdService=(id)=>{
    return `Fetching product with ID: ${id}`
};

const postProductsService=()=>{
    return "Adding a new product";
};

const editProductsService=()=>{
    return "Put request called";
};

const deleteProductsByIdService=()=>{
    return "Delete request called";
};

module.exports={
    getProductsService,
    getProductsByIdService,
    postProductsService,
    editProductsService,
    deleteProductsByIdService
};

