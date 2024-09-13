const { STATUSCODE } = require('../../../constants/statusCode')
const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const register = asyncHandler(async (req, res) => {})

const login = asyncHandler(async (req, res) => {})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
  if (!user) {
    res.status(STATUSCODE.NOT_FOUND)
    throw new Error('User not found!')
  }
  const { avatar, freinds, email } = req.body

  if (avatar) user.avatar = avatar

  if (email) user.email = email

  // if (freinds) {
  //     let a = [...(user.freinds||[]), ...freinds]

  // }

  await user.save()
  return res.status(STATUSCODE.OK).json(user)
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
  if (!user) {
    res.status(STATUSCODE.NOT_FOUND)
    throw new Error('User not found!')
  }

  return res.status(STATUSCODE.OK).json(user)
})

module.exports = { register, login }
