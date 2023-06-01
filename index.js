require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
app.use(express.json())
const routes = require('./routes')

app.use(cors())

const db_connect = require("./configure/db_connect")

  db_connect()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use(routes)
app.listen(7000,()=>{
    console.log('server connected')
})