const { serviceCreateProduct, serviceGetProduct, serviceGetProductById, serviceUpdateProductById, serviceBulkUpdateProduct, ServiceDeleteProductById, serviceBulkDeleteProduct } = require("../service/produc.Service");

exports.createProduct = async (req, res, next) => {
  try {
    const result = await serviceCreateProduct(req.body);
    res.status(200).json({
        status: 'Success',
        message:'Successfully created data',
        result
    })
  } catch (error) {
    res.status(400).json({
        status: 'Fails',
        message:'Data is not created.',
        error: error.message
    })
  }
};

exports.getProduct = async(req,res,next)=>{

  try {
    const result = await serviceGetProduct()
    res.status(200).json({
      status: 'Success',
      message:'Successfully got data',
      result
  })
  } catch (error) {
    res.status(400).json({
      status: 'Fails',
      message:'Data is not fetched.',
      error: error.message
  })
  }
}

exports.getProductById = async(req,res,next)=>{
  try {
    const {id}=req.params;
    const result = await serviceGetProductById(id);
    res.status(200).json({
      status: 'Success',
      message:'Successfully got data',
      result
  })
    
  } catch (error) {
    res.status(400).json({
      status: 'Fails',
      message:'Data is not fetched.',
      error: error.message
  })
  }
}

exports.updateProductById = async(req,res,next)=>{
  try {
    const {id} = req.params;
    const result = await serviceUpdateProductById(id,req.body);
    res.status(200).json({
      status: 'Success',
      message:'Successfully updated data',
      result
  })
    
  } catch (error) {
    res.status(400).json({
      status: 'Fails',
      message:'Data is not updated.',
      error: error.message
  })
  }
}

exports.bulkUpdateProduct = async(req,res,next)=>{
  try {
    const result = await serviceBulkUpdateProduct(req.body);
    res.status(200).json({
      status: 'Success',
      message:'Successfully updated data',
      result
  })
    
  } catch (error) {
    res.status(400).json({
      status: 'Fails',
      message:'Data is not updated.',
      error: error.message
  })
  }
}




exports.deleteProductById = async(req,res,next)=>{
  try {
    const {id} = req.params;
    const result = await ServiceDeleteProductById(id);
    res.status(200).json({
      status: 'Success',
      message:'Successfully deleted data',
      result
  })
    
  } catch (error) {
    res.status(400).json({
      status: 'Fails',
      message:'Data is not deleted.',
      error: error.message
  })
  }
}

exports.bulkDeleteProduct = async(req,res,next)=>{
  try {
    
    const result = await serviceBulkDeleteProduct(req.body.ids);

    if(!result.deletedCount){
      return res.status(400).json({
        status:'Fails',
        error : "Could not deleted the data"
      })
    }
    res.status(200).json({
      status: 'Success',
      message:'Successfully deleted data',
      result
  })
    
  } catch (error) {
    res.status(400).json({
      status: 'Fails',
      message:'Data is not deleted.',
      error: error.message
  })
  }
}