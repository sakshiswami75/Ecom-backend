const { json } = require("express");
const CartModel = require("../Model/Cart")

exports.addToCart=async (req,res,next) => {
    const{productId,quantity,userId}=req.body;
    try {
         let cart=await CartModel.findOne({userId});
        if(!cart){
            cart = await CartModel.create({userId,items:[]})
        }  
        const existingCart=cart.items.find((item)=>item.productId.toString()===productId)
        if(existingCart){
            existingCart.quantity+=quantity;
        }
        else{
            cart.items.push({productId,quantity})
        }
        await cart.save();
        res.status(201).json({message:"Cart added"})
    } catch (error) {
        next(error)
    }
    
}

exports.removeCartProduct=async (req,res,next) => {
    const{productId,userId}=req.body;
    try {
        const cart=await CartModel.findOne({userId});
        if(!cart){
            const error=new Error("No product in the cart");
            error.statusCode=400;
            throw error
        }
        cart.items=cart.items.filter((item)=>item.productId.toString()!==productId)
        await cart.save();
        res.status(200).json({message:"Product removed from cart"});
    } catch (error) {
        next(error)
    }
    
}
exports.viewCart=async (req,res,next) => {
    const{userId}=req.body;
    try {
        const cart=await CartModel.findOne({userId}).populate("items.productId","name price description quantity imageUrl")
        if (!cart) {
            return res.status(200),json({message:"Cart is empty",items:[]})
        }
        res.status(200),json({ cart })
    } catch (error) {
        next(error)
    }
};
exports.updateCartItem=async (req,res,next) => {
    const {userId,productId,quantity}=req.body
    try {
        const cart=await CartModel.findOne({userId});
        if(!cart){
            const error=new Error("Cart is empty");
            error.statusCode=400;
            throw error
        }
        const neededItem=cart.items.find((item)=>item.productId.toString()===productId)
        neededItem.quantity=quantity;
        await cart.save();
        res.status(200).json({message:"Updated"})
    } catch (error) {
        next(error)
    }
    
}