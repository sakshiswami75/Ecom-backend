const express=require("express");
const userRoute=require("./userRoute");
const routes=express.Router();
routes.use("/users", userRoute);

module.exports=routes;