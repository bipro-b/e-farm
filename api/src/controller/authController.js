
const bcryptjs = require("bcryptjs");
const  User = require("../model/user.model");

exports.signup = async(req,res,next)=>{
    const{name,phone,password}=req.body;

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({name,phone,password:hashedPassword});

    try {
        await newUser.save();
        res.status(201).json({
            message:"User SignUP successfully.",
            newUser
        })
        
    } catch (error) {
        next(error)
    }
}