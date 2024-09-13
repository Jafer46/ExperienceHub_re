const { STATUSCODE } = require('../../../constants/statusCode')
const User = require('../../users/models/user')
const Message = require('../models/message')
const asyncHandler = require('express-async-handler')

const addFreind = asyncHandler(async (req, res) => {
  const { freindId } = req.body
  const user = await User.findOne({ _id: req.user.id })
  const freind = await User.findOne({ _id: freindId })
  if (!freind) {
    res.status(STATUSCODE.NOT_FOUND)
    throw new Error('User not found!')
  }

  if (freindId) {
    const freinds = [...user.freinds, freindId]
    user.freinds = freinds
  }

  await user.save()
  return res.status(STATUSCODE.CREATED).json(user)
})

const removeFreind = asyncHandler(async (req, res) => {
  const { freindId } = req.body
  const user = await User.findOne({ _id: req.user.id })

  let arr = []
  if (freindId) {
    arr = [...(user.freinds || [])]
    user.freinds = arr.filter(item => item !== freindId)
  }

  await user.save()
  return res.status(STATUSCODE.OK).json(user)
})

module.exports = { addFreind, removeFreind }
