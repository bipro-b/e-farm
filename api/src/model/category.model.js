const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String,
    }
},{timeStamps:true})

const Category = mongoose.model("category",categorySchema);
module.exports = Category;

