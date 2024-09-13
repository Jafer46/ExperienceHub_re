const express = require('express')
const dotenv = require('dotenv').config()
const dbconnection = require('./config/dbconnect')
const port = process.env.PORT || 5000
const app = express()

dbconnection()

app.listen(port, () => {
  console.log(`app is listening to port ${port}`)
})
