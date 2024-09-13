const mongoose = require('mongoose')

const roleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Role name is required!']
    },
    description: {
      type: String
    },
    generalRole: {
      type: String
    },
    allowedRoutes: {
      type: [mongoose.Types.ObjectId],
      ref: 'Route'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Role', roleSchema)
