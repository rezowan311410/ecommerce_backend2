const User = require("../model/userModel")

async function products (req,res,next){
    userId = req.headers.authorization.split('@')[1];
    password = req.headers.authorization.split('@')[2]
    
    if(!req.headers.authorization){
       res.send({error: "you are not authorize"})
    }

    let user = await User.find({_id:userId})
    
    if(user.length>0){
        if(password == process.env.MERCHANT_SECREACT_KEY){
            if(user[0].role == 'merchant'){
               next()
            }
        }else{
            res.send({error: "you are not able to upload this product"})
        }
    }else{
      return res.send({error: "you are not able to upload this product"})
    }
}

 function createProduct(req,res){
    console.log("product create hoica")
}

module.exports = {products,createProduct}