
const getProductsService=()=>{
    return "Fetching all products";
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

