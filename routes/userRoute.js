const express=require("express");
const { getAllUsers } = require("../Controllers/userController");

const routes=express.Router();

routes.get("/",getAllUsers);

module.exports=routes;