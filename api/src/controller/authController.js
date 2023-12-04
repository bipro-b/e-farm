const bcryptjs = require("bcryptjs");
const User = require("../model/user.model");

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
