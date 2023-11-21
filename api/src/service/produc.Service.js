const Product = require("../model/product.model")

exports.serviceCreateProduct = async(data)=>{
    const product = await Product.create(data);
    return product;
}
exports.serviceGetProduct = async()=>{
    const product = await Product.find();

    return product;
}

exports.serviceGetProductById= async(id)=>{
    const product = await Product.findOne({_id:id})
    return product;
}