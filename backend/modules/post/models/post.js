const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', postSchema)
