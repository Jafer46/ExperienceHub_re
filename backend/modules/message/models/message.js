const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    reciever: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    content: {
      type: String,
      required: [true, 'Message content is required!']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Message', messageSchema)
