const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "User name is required"],
        minLength: [5, "name must be at least 5 char"],
        maxLength: [40, "name must be less then 50 char"],
        trim: true
    },
    email:{
        type: String,
        required: [true, "User email is required"],
        lowercase: true,
        unique: [true, "Already registered email"]
    },
    password:{
        type: String,
        select: false,
    },
    forgotPasswordToken:{

    },
    forgotPasswordExpiryDate:{
        
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;