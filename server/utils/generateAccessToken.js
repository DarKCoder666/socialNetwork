const config = require('../config.json')
const jwt = require('jsonwebtoken')

function generateAccessToken(data) {
  // expires after half and hour (3600 seconds = 60 minutes)
  return jwt.sign(data, config.jwtSecret, { expiresIn: '3600s' });
}

module.exports = generateAccessToken