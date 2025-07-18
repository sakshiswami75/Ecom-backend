const productModel = require("../Model/Products");
const Rating=require("../Model/Rating")
// const { json } = require("express");
// const { findByIdAndDelete } = require("../Model/User");

exports.createProduct=async (req,res,next) => {
    let {name,category,description,price,quantity,imageUrl}=req.body
        try {
            if (req.file) {
            imageUrl = `/uploads/${req.file.filename}`;
        }
        console.log(imageUrl)
        const products=await productModel.create({name,description,category,price,quantity,imageUrl});
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
        res.status(200).json(products)
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
        const ratings = await Rating.find({id})
    let averageRating = 0;
    if (ratings.length > 0) {
      const sum = ratings.reduce((total, rating) => total + rating.rating, 0);
      averageRating = sum / ratings.length;
    }
    const response = {
      ...product.toObject(),
      averageRating: parseFloat(averageRating.toFixed(1)),
      totalRatings: ratings.length,
      outOf5: 5,
    };

    res.json(response);
    } catch (error) {
        next(error)
    }
    
}

exports.updateProductById=async (req,res,next) => {
    const {id}=req.params;
    const {name,category,description,price,quantity,imageurl}=req.body
    try {
           if (req.file) {
            imageUrl = `/uploads/${req.file.filename}`;
        }
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

