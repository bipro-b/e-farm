const { serviceCreateProduct, serviceGetProduct, serviceGetProductById } = require("../service/produc.Service");

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