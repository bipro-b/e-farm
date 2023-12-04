const bcryptjs = require("bcryptjs");
const User = require("../model/user.model");
const { errorHandler } = require("../utils/error");
const  jwt = require("jsonwebtoken");
exports.signup = async (req, res, next) => {
  const { name, phone, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ name, phone, password: hashedPassword });

  const phoneNumber = parseInt(phone);
  const bdPhoneNumberRegex = /^(?:\+88\/88\/)?01[3-9]\d{8}$/;
  if (!bdPhoneNumberRegex.test(phone.toString())) {
    return res.json("Number is not valid");
  }

  try {
    
    await newUser.save();
    res.status(201).json({
      message: "User SignUP successfully.",
      newUser: {
        name,
        phone: phoneNumber,
      },
    });
  } catch (error) {
    next(error);
    if (error.code === 11000) {
        return res.status(409).json({ error: "Phone number already exists" });
    } else {
        return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

exports.signIn = async(req,res,next)=>{
    const {phone,password} = req.body;

try {
    const validUser = await User.findOne({phone:phone});
    if(!validUser) return next(errorHandler(404, "User not found."));
    const validPassword = bcryptjs.compareSync(password,validUser.password);
    if(!validPassword) return next(errorHandler(401,"Wrong Credential"));
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
    const {password:pass,...rest} = validUser._doc;
    res.cookie("access_token",token,{httpOnly:true})
    .status(200)
    .json(rest);
} catch (error) {
    next(error)
}
}

