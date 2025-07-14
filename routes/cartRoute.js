const express=require("express");
const { addToCart } = require("../Controllers/cartController");
const router=express.Router();

router.post("/add",addToCart)

module.exports=router