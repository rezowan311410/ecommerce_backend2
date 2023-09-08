const express = require('express')
const _ = express.Router()
const registrationcontrollers = require("../../controllers/registrationControllers");
const loginControllers = require('../../controllers/loginControllers');
const otpMatch = require("../../controllers/otpMatch")

_.post('/registration',registrationcontrollers);


_.post('/login',loginControllers);
_.post('/verificationOtpMatch',otpMatch);




 module.exports = _