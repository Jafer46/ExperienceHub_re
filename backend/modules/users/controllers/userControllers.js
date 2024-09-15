const { STATUSCODE } = require('../../../constants/statusCode')
const User = require('../models/user')
const Role = require('../../admin/models/role')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { GENERALROLES } = require('../../../constants/generalRole')

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    res.status(STATUSCODE.VALIDATION_ERROR)
    throw new Error('Manadary fields are required!')
  }

  const userExist = await User.findOne({
    $or: [{ email }, { username }]
  })

  if (userExist) {
    res.status(STATUSCODE.CONFLICT)
    throw new Error('User already exists with this email or username!')
  }

  const role = await Role.findOne({
    generalRole: GENERALROLES.USER
  })

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    avatar: '',
    freinds: [],
    role: role._id
  })

  const token = jwt.sign(
    {
      user: {
        email: user.email,
        id: user._id
      }
    },
    process.env.ACCESS_TOKEN_SECRETE,
    { expiresIn: '4hr' }
  )
  return res.status(STATUSCODE.OK).json({ user, token })
})

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(STATUSCODE.VALIDATION_ERROR)
    throw new Error('Manadary fields are required!')
  }

  const user = await User.findOne({ email })
  if (!user) {
    res.status(STATUSCODE.NOT_FOUND)
    throw new Error('User not found!')
  }

  const checkPassword = bcrypt.compare(password, user.password)
  if (!checkPassword) {
    res.status(STATUSCODE.VALIDATION_ERROR)
    throw new Error('Incorrect password!')
  }

  const token = jwt.sign(
    {
      user: {
        email: user.email,
        id: user._id
      }
    },
    process.env.ACCESS_TOKEN_SECRETE,
    { expiresIn: '4hr' }
  )
  return res.status(STATUSCODE.OK).json({ user, token })
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
  if (!user) {
    res.status(STATUSCODE.NOT_FOUND)
    throw new Error('User not found!')
  }
  const { avatar, freinds, email } = req.body

  if (avatar) user.avatar = avatar

  if (email) user.email = email

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

module.exports = { register, login, updateUser, deleteUser }
