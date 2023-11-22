const Product = require("../model/product.model");

exports.serviceCreateProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};
exports.serviceGetProduct = async () => {
  const product = await Product.find();

  return product;
};

exports.serviceGetProductById = async (id) => {
  const product = await Product.findOne({ _id: id });
  return product;
};

exports.serviceUpdateProductById = async (id, data) => {
  const updatedProduct = await Product.updateOne(
    { _id: id },
    {
      $set: data,
    },
    {
      runValidators: true,
    }
  );
  return updatedProduct;
};

exports.serviceBulkUpdateProduct = async (data) => {
  const updateOperations = data.map((product) => ({
    updateOne: {
      filter: { _id: product._id },
      update: { $set: product },
    },
  }));

  const updateProducts = await Product.bulkWrite(updateOperations);
  return updateProducts;
};


exports.ServiceDeleteProductById = async(id)=>{
    const result = await Product.deleteOne({_id:id});
    return result;
}


exports.serviceBulkDeleteProduct = async(ids)=>{
  const deletedProducts = await Product.deleteMany({_id:ids});
  return deletedProducts;
}