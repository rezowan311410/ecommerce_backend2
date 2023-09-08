const express = require('express')
const _ = express.Router()
const {products,createProduct} = require("../../controllers/productControllers");


_.post("/createproducts",products,createProduct);

module.exports = _;
