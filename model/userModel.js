const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName:{
        type:String,
        require: true
    }, 
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type:String,
        require: true
    },
    avatar:{
        type:String,
        
    },
    randomOtp:{
        type:String,
        
    },
    emailVarified:{
        type:Boolean,
        default:false
    }, 
     merchant:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum: ["admin","member","merchant"]
    },
    updated:{
        type: Date
    },
    created:{
        type: Date,
        default: Date.now
    },
    facebookId:{
        type: String
    },
    linkedinId:{
        type: String
    },
});


module.exports = mongoose.model("User",userSchema)
