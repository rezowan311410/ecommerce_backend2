const express = require('express')
const _ = express.Router()
const {categoryController,statusControllers,subcategoryController,subCategorystatus,getallCategory,getallsubCategory} = require("../../controllers/categoryControllers");

_.post("/createcategory",categoryController);

_.post("/statusControllers",statusControllers);

_.post("/createsubcategory",subcategoryController);

_.post("/subcaterystatus",subCategorystatus);

_.get("/getallcategory",getallCategory);

_.get("/getallsubcategory",getallsubCategory);


module.exports = _;