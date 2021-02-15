const mongoose = require('mongoose')

const UserModel = mongoose.model("User", {
  email: String,
  password: String
})

module.exports = UserModel
