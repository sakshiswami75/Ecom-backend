const productModel = require("../Model/Products");
const { json } = require("express");
const { findByIdAndDelete } = require("../Model/User");

exports.createProduct=async (req,res,next) => {
    const {name,category,description,price,quantity,imageurl}=req.body
    try {
        const products=await productModel.create({name,description,category,price,quantity,imageurl});
        res.status(201).json({
            Message:"Product created successfully",
            products
        })
        
    } catch (error) {
        next(error)
    }
    
}

exports.getAllProducts=async (req,res,next) => {

    try {
        const products=await productModel.find();
        res.status(200).json({products})
    } catch (error) {
        next(error)
    }
    
}
exports.getProductById=async (req,res,next) => {
    const {id} = req.params;
    try {
        const product=await productModel.findById(id);
        if(!product){
            const error=new Error("Product does not exist")
            error.statusCode=(400);
            throw error
        }     
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
    
}

exports.updateProductById=async (req,res,next) => {
    const {id}=req.params;
    const {name,category,description,price,quantity,imageurl}=req.body
    try {
        const product=await productModel.findById(id);
        if(!product){
            const error=new Error("Product does not exist")
            error.statusCode=400;
            throw error
        }     
        const updateProduct=await productModel.updateOne({_id:id},{$set:{name,description,category,price,quantity,imageurl}})   
        res.status(202).json({message:"Product updated",product:updateProduct})    
    } catch (error) {
        next(error)
    }
}

exports.deleteProductById=async (req,res,next) => {
    const {id}=req.params;
    try {
        const deleteProduct=await productModel.findByIdAndDelete(id)
        if (!deleteProduct) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
}
        res.status(200),json({message:"Product deleted successfully"})
    } catch (error) {
        next(error)
    }   
}

