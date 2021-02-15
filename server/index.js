const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const bcrypt = require('bcrypt')
const UserModel = require('./db/models/user.model')
const generateAccessToken = require('./utils/generateAccessToken')
const authenticateToken = require('./middlewares/authenticateToken')
const cors = require('cors')
const app = express()
const PORT = 5000

// Allow cors all
app.use(cors())

// Initialize database
require('./db')

app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/auth/signup', async function (req, res) {
  const { email, password } = req.body
  const foundUser = await UserModel.findOne({ email })

  // Check if email is registred
  if (foundUser) {
    return res.json({
      success: false,
      message: "User with such email is already registred!"
    })
  }

  // Generate password hash
  const saltRounds = 10
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return res.json({ success: false, message: 'Something went wrong!' })
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) return res.json({ success: false, message: 'Something went wrong!' })
      const newUser = new UserModel({ email, password: hash })
      try {
        await newUser.save()
        res.json({
          success: true
        })
      } catch (err) {
        res.json({ success: false, message: 'Can not create the user!' })
      }
    })
  })
})

app.post('/auth/signin', async function (req, res) {
  const { email, password } = req.body
  const foundUser = await UserModel.findOne({ email })

  // Check if email is registred
  if (!foundUser) {
    return res.json({
      success: false,
      message: "User with such email or password is not found!"
    })
  }

  bcrypt.compare(password, foundUser.password, function (err, result) {
    if (err) return res.json({ success: false, message: 'Something went wrong!' })
    if (!result) {
      return res.json({
        success: false,
        message: "User with such email or password is not found!"
      })
    }

    res.json({
      success: true,
      data: {
        token: generateAccessToken({ id: foundUser._id })
      }
    })
  })
})

app.get('/user', authenticateToken, function (req, res) {
  res.json(req.user)
})

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`)
})
