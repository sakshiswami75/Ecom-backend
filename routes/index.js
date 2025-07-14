const express=require("express");
const userRoute=require("./userRoute");
const productRoute=require("./productRoute");
const authRoute=require("./authRoute");
const cartRoute=require("./cartRoute")
const routes=express.Router();

routes.use("/users", userRoute);
routes.use("/products",productRoute)
routes.use("/auth",authRoute)
routes.use("/cart",cartRoute)
module.exports=routes;