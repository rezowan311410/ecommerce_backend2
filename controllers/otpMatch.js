const User = require("../model/userModel")

let otpMatch = async(req,res)=>{
    let {email, randomOtp} = req.body
     const otpfind = await User.find({email});
    if(otpfind.length>0){
        if(randomOtp == otpfind[0].randomOtp){
            res.json({successful:"Otpmatch successful"})
         }else{
            res.json({error:"your Otp not match"})
         }
    }
}

module.exports = otpMatch