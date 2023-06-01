const Email_validation = require("../email_validation/Email_validation")
const User = require("../model/userModel");
const bcrypt = require('bcrypt');
const sendEmail = require("../helpers/sendEmail");
const otpTempleate = require("../helpers/otpTempleate")
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const { set } = require("mongoose");





let registrationcontrollers =  async (req,res)=>{
    const {fullName,email,password} = req.body;
    
    if(!fullName){
        return res.json({error:"Provide your full name!"})
    }
    else if(!email){
        return res.json({error:"Provide your email !"})
    }
    else if(!Email_validation(email)){
        return res.json({error:"Provide your valid email !"})
    }
    else if(!password){
        return res.json({error:"Provide your password"})
    }
    else{
        let duplicat_email = await User.find({email})
       
        if(duplicat_email.length > 0){
          return  res.json({error:"email already have exits"})
        }
        
        bcrypt.hash(password,10, async function(err, hash) {
            const user = new User({
                fullName,
                email,
                password:hash
            })
            user.save()
            const generator2 = aleaRNGFactory(Date.now());
            let randomNum = generator2.uInt32().toString().substring(0,4);
            
            let rondomOtpStore = await User.findOneAndUpdate(
                {email},
                {$set:{randomOtp:randomNum}},
                {new:true}

            )

            // sendEmail(email,randomNum,otpTempleate)
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "rezowan311410@gmail.com", // generated ethereal user
                  pass: "xmwfrtphzfjywgok", // generated ethereal password
                },
              });
            
              // send mail with defined transport object
              let info = await transporter.sendMail({
                from: 'rezowan311410@gmail.com', // sender address
                to: email, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: otpTempleate(randomNum), // html body
              });
            // setTimeout(async ()=>{
            //     let rondomOtpStore = await User.findOneAndUpdate(
            //         {email},
            //         {$unset:{randomOtp:""}},
            //         {new:true}
    
            //     )
            //     console.log("otp deleted")
            // },60000);
            res.json({successful:"your registration successful"})
        });

        //return res.json({successful:"your registration successful"})
    }
 }


 module.exports = registrationcontrollers