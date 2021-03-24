const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
   return res.json({ isAuth: false, message: "received token is not valid: " + token })
  }
  else {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.json({
          isAuth: false,
          message: "Failed authentication"
        })
      }
      else {
        req.userid = decoded.id;
        return next()
      }
    })
  }
}
