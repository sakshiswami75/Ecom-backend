const express=require("express");
const userRoute=require("./userRoute");
const productRoute = require("./productRoute");
const routes=express.Router();
routes.use("/users", userRoute);
routes.use("/products",productRoute)

module.exports=routes;