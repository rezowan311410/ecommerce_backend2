const express = require('express')
const apiRoute = require("./api")
const _ = express.Router()

const api = process.env.BASE_URL
console.log(api)

_.use(api,apiRoute)

_.use(api,(req,res)=>{
    res.json({message:"api not founded"})
})

module.exports = _