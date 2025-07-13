const express=require("express");
const UserModel = require("../Model/User")
exports.getAllUsers=async (req,res,next) => {
        try {
        const users=await UserModel.find();
        res.status(200).json(users);

    } catch (error) {
        next(error)
    }
    
}