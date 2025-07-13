const mongoose=require("mongoose");

const ratingSchema=new mangoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId(ObjectId),
        require:true,
        ref:"User"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId(ObjectId),
        require:true,
        ref:"Product"
    },
    ratingCount:{type:Number,min:1,max:5,require:true},
    review:{type:String},

},{
    timestamps:true
})
const ratingModel = mongoose.model("rating", ratingSchema);

module.exports=ratingModel;