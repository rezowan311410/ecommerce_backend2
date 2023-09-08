const Category = require("../model/categoryModel")
const subCategory = require("../model/subCategory")
let categoryController = async (req,res)=>{
    let {name,description} = req.body
    const duplicateName = await Category.find({name});
    if(duplicateName.length>0){
       return res.json({error:"please try another name"})
    }

    let category = new Category({
        name,
        description,
    });
    category.save();
    res.send({name,description,successful:"category successful"})
    
}

let statusControllers = async (req,res)=>{
    let {name,status} = req.body
   
    if(status == "rejected" || status == "waiting"){
        const statusUpdate = await Category.findOneAndUpdate({name},{$set:{isActive:false,status:status}},{new:true});
          return res.json({error:"status updated"})

    }else if(status == "approved"){
        const statusUpdate = await Category.findOneAndUpdate({name},{$set:{
            isActive:
            true,
            status:status
        }},
            {new:true});
          return res.json({successful:"status update successful"})
    }
}
8/*==========================================================
                  subcategory start
   ===========================================================*/ 
   let subcategoryController = async (req,res)=>{
    let {name,description,category} = req.body
    const duplicateName = await subCategory.find({name});
    if(duplicateName.length>0){
       return res.json({error:"please try another name"})
    }

    let subcategory = new subCategory({
        name,
        description,
        category
    });
    subcategory.save();
    // console.log(subcategory._id)
    // console.log(subcategory.category)
    await Category.findOneAndUpdate({_id:subcategory.category},{$push:{
        subCategory:
        subcategory._id    
    }},
        {new:true});
    res.send({name,description,successful:"subcategory successful"})
    
} 


let subCategorystatus = async (req,res)=>{
    let {name,status} = req.body
   
    if(status == "rejected" || status == "waiting"){
        const statusUpdate = await subCategory.findOneAndUpdate({name},{$set:{isActive:false,status:status}},{new:true});
          return res.json({error:"status updated"})

    }else if(status == "approved"){
        const statusUpdate = await subCategory.findOneAndUpdate({name},{$set:{
            isActive:
            true,
            status:status
        }},
            {new:true});
          return res.json({successful:"status update successful"})
    }
}
   /*==========================================================
                  subcategory end
   ===========================================================*/ 

   /*==========================================================
                  get all category part start
   ===========================================================*/ 
       let getallCategory = async (req,res)=>{
              let data = await Category.find({}).populate("subCategory")
              res.send(data)
       }
   /*==========================================================
                  get all category part end
   ===========================================================*/ 

    /*==========================================================
                  get all subcategory part start
   ===========================================================*/ 

        let getallsubCategory = async (req,res)=>{
            let data = await subCategory.find({}).populate("category")
            res.send(data)
        }
    /*==========================================================
                  get all subcategory part end
   ===========================================================*/ 


module.exports = {categoryController,statusControllers,subcategoryController,subCategorystatus,getallCategory,getallsubCategory}