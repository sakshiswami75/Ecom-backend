const mongoose=require("mongoose");

const cartSchema=new mangoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    items:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId},
            require:true,
            ref:"Product",
            quantity:{type:Number,require:true,default:1}
        }
    ]

},{
    timestamps:true
})
const CartModel = mongoose.model("cart", cartSchema);

module.exports=CartModel;