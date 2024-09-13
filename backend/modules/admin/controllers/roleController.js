const Role = require('../models/role')
const asyncHandler = require('express-async-handler')

const getRole = asyncHandler(async (req, res) => {
  const role = await Role.findOne({ _id: req.params.id })
  return res.json(role)
})

const getRoles = asyncHandler(async (req, res) => {})

const createRole = asyncHandler(async (req, res) => {})

const delteRole = asyncHandler(async (req, res) => {})

module.exports = { createRole }
