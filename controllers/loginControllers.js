const Email_validation = require("../email_validation/Email_validation")
const User = require("../model/userModel");
const bcrypt = require('bcrypt');


let loginControllers = async(req,res)=>{
    let{email,password} = req.body;

    

    if(!email){
        return res.json({error:"Provide your email !"})
    }
    else if(!Email_validation(email)){
        return res.json({error:"Provide your valid email !"})
    }
    else if(!password){
        return res.json({error:"Provide your password"})
    }else{
        let isemailExits =  await User.find({email});  
        if(isemailExits.length>0){
            bcrypt.compare(password,isemailExits[0].password).then (function(result) {
                if(result){
                    res.json({successful:"Login successful"}) 
                }else{
                    res.json({error:"password Incorrect"}) 
                }
            });

        }else{
            res.json({error:"your email is invalid"})
        }
        
    }


   
}



module.exports = loginControllers