
exports.createUser = async(req,res,next)=>{
    try {

        res.status(200).json({
            status:"Success",
            message:"Successfully created user.",
            result
            
        })
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Couldn't create data",
            error:error.message
        })
    }
}