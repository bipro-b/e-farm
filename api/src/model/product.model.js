const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const productSchema =  mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    unit:{
       type: String,
       enum:["kg","piece"],
       required:true
    },
    imageUrls:{
        type: Array,
        required:true,
    },
    location:String,
    /* category:{
        name:{
            type:String,
            required:true
        },
        id:{
            type: ObjectId,
            ref:"Category",
            required:true
        }
    } */

},{timeStamps:true})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;