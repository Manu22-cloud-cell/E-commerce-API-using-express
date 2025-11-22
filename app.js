const express=require("express");
const app=express();

const userRouter=require("./routes/userRoutes");
const productRouter=require("./routes/productRoutes");
const cartRouter=require("./routes/cartRoutes");

app.use(express.json());

//static folder
app.use(express.static('public'));

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/cart",cartRouter);

app.use((req,res)=>{
    res.status(404).send("Page not found");
})

const port=4000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})