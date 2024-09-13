const mongoose = required('mongoose')

const routeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Route name is required!']
    },
    path: {
      type: String,
      required: [true, 'Path is required!']
    }
  },
  {
    timestamps: true
  }
)
