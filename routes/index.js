const express=require("express");
const userRoute=require("./userRoute");
const productRoute=require("./productRoute");
const authRoute=require("./authRoute");
const routes=express.Router();

routes.use("/users", userRoute);
routes.use("/products",productRoute)
routes.use("/auth",authRoute)
module.exports=routes;