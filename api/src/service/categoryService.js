const Category = require("../model/category.model");

exports.serviceCreateProduct = async(data)=>{
    const category = await Category.create(data);
    return category;
}

exports.serviceGetCategory = async(id)=>{
    const category = await Category.findOne({_id:id});
    return category;
}