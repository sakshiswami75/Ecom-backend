const mongoose=require("mongoose");

const tokenSchema=new mangoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId(ObjectId),
        require:true,
        ref:"User"
    },
    tokenid:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

const tokenModel=mongoose.model("token",tokenSchema);

module.exports=tokenSchema;