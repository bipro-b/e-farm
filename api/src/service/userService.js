const { default: User } = require("../model/user.model")


exports.serviceCreateUser = async(data)=>{
    const user = await User.create(data);
    return user;
}