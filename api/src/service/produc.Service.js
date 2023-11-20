const Product = require("../model/product.model")

exports.serviceCreateProduct = async(data)=>{
    const product = await Product.create(data);
    return product;
}