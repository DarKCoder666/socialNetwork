const jwt = require('jsonwebtoken')
const config = require('../config.json')

function authenticateToken(req, res, next) {
  const authHeader = req.headers['Authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = authenticateToken