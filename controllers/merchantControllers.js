
const Store = require("../model/merchantModel")
const User = require("../model/userModel")
 async function becomemerChant(req,res){
   
    const {storename,officialemail,officialPhone,address,owner,products} = req.body

    const store = new Store({
        storename,
        officialemail,
        officialPhone,
        address,
        owner,
        products
    })
    store.save()
    res.send({store})

    await User.findOneAndUpdate({_id:owner},{role:"merchant"},{new:true})
}

module.exports = becomemerChant