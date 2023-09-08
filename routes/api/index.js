const express = require('express')
const _ = express.Router()
const authRoutes = require('./auth')
const categoryRoutes = require("./category");
const merchantRoutes = require("./merchant")
const productRoutes = require("./product");
_.use("/auth",authRoutes);

_.use("/merchant",merchantRoutes);
_.use('/category', categoryRoutes);

_.use('/products', productRoutes);


module.exports = _;