const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Comment', commentSchema)
