const jwt = require('jsonwebtoken')
const usersData = require('../data/users')
const bcrypt = require('bcrypt');
const userModel = require('../models/user')
const PassportLocalStrategy = require('passport-local').Strategy

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  var user = {
    email: email.trim(),
    password: password.trim()
  }

  userModel.findOne({ email: user.email }).lean().then(res => res)
    .then(foundUser => {

      if (!foundUser) {
        const error = new Error('Incorrect email or password')
        error.name = 'IncorrectCredentialsError'

        return done(error)
      }

      bcrypt.compare(password, foundUser.password)
        .then(isMatch => {
          if (!isMatch) {
            const error = new Error('Incorrect email or password')
            error.name = 'IncorrectCredentialsError'

            return done(error)
          }
        });



      const payload = {
        sub: foundUser._id
      }

      // create a token string
      const token = jwt.sign(payload, 's0m3 r4nd0m str1ng')

      return done(null, token, foundUser)
    })
})
