const {sendSuccess,sendError}=require("../utils/response")

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const getUsers=(req,res)=>{
    sendSuccess(res, "Fetching all users", users);
}

const postUser=(req,res)=>{
    sendSuccess(res, "Adding a new user");
}

const getUserById=(req,res)=>{
    const id=Number(req.params.id);
    //ID shouldn't be greater than 50
    if(id>50){
        return sendError(res,"ID cannot be greater than 50",400);
    }
    const user = users.find(u => u.id === id);

    //User not found
    if (!user) {
        return sendError(res, "User not found", 404);
    }
    sendSuccess(res, `Fetching user with ID: ${id}`, user);
}

module.exports={
    getUsers,
    postUser,
    getUserById
}
