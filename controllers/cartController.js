const getUserCartById=(req,res)=>{
    const id=req.params.userID;
    res.send(`Fetching cart for user with ID: ${id}`)
}

const postCartByUserId=(req,res)=>{
    const id=req.params.userID;
    res.send(`Adding product to cart for user with ID: ${id}`)
}

module.exports={
    getUserCartById,
    postCartByUserId
}