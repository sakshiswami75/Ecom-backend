const express=require("express");
const { getAllUsers, userRegister } = require("../Controllers/userController");

const routes=express.Router();

routes.get("/",getAllUsers);
routes.post("/",userRegister)
module.exports=routes;