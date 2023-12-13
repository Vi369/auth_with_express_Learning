//required user model Schema
const userModel = require("../model/auth.model");

const signUp = async(req, res)=>{
    const {name, email, password, confirmPassword} = req.body;
    console.log(name, email, password, confirmPassword);
    try {
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