//required user model Schema
const userModel = require("../model/auth.model");

const signUp = (req, res)=>{
    const {name, email, password, confirmPassword} = req.body;
    console.log(name, email, password, confirmPassword);
    try {
      const userInfo = userModel(req.body);
    } catch (error) {
      
    }
 return  res.status(200).json({
    success: true,
    message: "hnn successful"
 })  
}


module.exports = {signUp}