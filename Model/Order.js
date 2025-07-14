const mongoose=require("mongoose");

const orderSchema=new mangoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    items:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId},
            required:true,
            ref:"Product",
            quantity:{type:Number,require:true,default:1},
            price:{type:Number,require:true}
        }
    ],
    totalamount:{type:Number,require:true},
    address:{type:String,require:true},
    payment:{type:String},
    status:{
        type:String,
        default:"pending",
        enum:["pending","failed","paid"]
    }

},{
    timestamps:true
})
const orderModel = mongoose.model("order", orderSchema);

module.exports=orderModel;