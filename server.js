const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");
const routes = require("./routes");
dotenv.config();
const server=express();


mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Connected to MongoDB")})
.catch((e)=>{console.log(e)});


server.use(express.json());
server.use(cookieParser());
server.use("/api",routes);

server.listen(5000,()=>{
    console.log("Server connected");
});
