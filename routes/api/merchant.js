const express = require('express')
const _ = express.Router()
const becomemerChant = require("../../controllers/merchantControllers")



_.post('/becomemerchant',becomemerChant);


module.exports = _