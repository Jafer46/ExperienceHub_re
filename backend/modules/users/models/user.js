const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'User name is required!']
    },
    email: {
      type: String,
      required: [true, 'Email is required!']
    },
    password: {
      type: String,
      required: [true, 'Password is required!']
    },
    avatar: {
      type: String
    },
    freinds: {
      type: [mongoose.Types.ObjectId],
      ref: 'User'
    },
    status: {
      type: number
    },
    role: {
      type: mongoose.Types.ObjectId,
      ref: 'Role'
    }
  },
  {
    timestamps: true
  }
)

module.exports = userSchema
