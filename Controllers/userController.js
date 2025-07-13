const express=require("express");
const UserModel = require("../Model/User")
const bcrypt=require("bcryptjs")
exports.getAllUsers=async (req,res,next) => {
        try {
        const users=await UserModel.find();
        res.status(200).json(users);

    } catch (error) {
        next(error)
    }
    
}

exports.userRegister=async (req,res,next) => {
    const{name,email,password,role}=req.body;
    try {
        const exitUser=await UserModel.findOne({email});
        if(exitUser){
            const error=new Error("User already exist")
            error.statusCode = 400;
            throw error
        }
        const newPassword=await bcrypt.hash(password,10);
        const user=await UserModel.create({name,email,password:newPassword,role})
        res.status(201).json({message:"User registered successfully"});
    } catch (error) {
        next(error)
    }
}

