const mongoose = require('mongoose')

const dbconnection = () =>
  mongoose
    .connect(process.env.CONNECTIONSTRING)
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))

module.exports = dbconnection
