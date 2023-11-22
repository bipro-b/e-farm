const { serviceGetCategory } = require("../service/categoryService")

exports.createCategory = async(req,res,next)=>{
    try {
        const result = await  serviceGetCategory(req.body);
        res.status(200).json({
            status:"Success",
            message:"Successfully created data.",
            result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Data is not created.",
            error:error.message
        })
    }
}