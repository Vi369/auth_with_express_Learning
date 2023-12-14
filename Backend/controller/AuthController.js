//required user model Schema
const userModel = require("../model/auth.model");
// email validator
const emailValidator = require("email-validator");

const signUp = async(req, res)=>{
    const {name, email, password, confirmPassword} = req.body;
    console.log(name, email, password, confirmPassword);
    try {
      if(!name || !email || !password || !confirmPassword){
         return res.status(400).json({
            success: false,
            message: "Every feild is required"
         })
      }
      // validation check 
      var validEmail = emailValidator.validate(email);
      if(!validEmail){
         console.log("please provide Valid Email");
         return res.status(400).json({
            success: false,
            message: "please provide Valid Email"
         })
      }
      if(password !== confirmPassword){
         console.log("Password and confirm password don't match")
         return res.status(400).json({
            success: false,
            message: "Password and confirm password don't match"
         })
      }

      const userInfo = userModel(req.body);
      const result = await userInfo.save();
      return res.status(200).json({
         success: true,
         data: result
      })
    } catch (error) {
      // if user data already has so throw duplicate error
      if(error.code === 11000){
         return res.status(400).json({
            success: false,
            message: "Account Already exists"
         })
      }
      return res.status(400).json({
         success: false,
         message: e.message
      })
    }

}


module.exports = {signUp}