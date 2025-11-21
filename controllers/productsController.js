const getProducts=(req,res)=>{
    res.send("Fetching all products")
}

const getProductsById=(req,res)=>{
    const id=req.params.id;
    res.send(`Fetching product with ID: ${id}`)
}

const postProducts=(req,res)=>{
    res.send("Adding a new product")
}

const editProducts=(req,res)=>{
    res.send("Put request called")
}

const deleteProductsById=(req,res)=>{
    res.send("Delete request called")
}

module.exports={
    getProducts,
    getProductsById,
    postProducts,
    editProducts,
    deleteProductsById
}