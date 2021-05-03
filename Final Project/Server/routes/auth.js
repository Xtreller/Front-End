const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user');
const reportModel = require('../models/reports');
const config = require('../config/config');
const verifyJwt = require('../middleware/auth-check');
const transporter = require('../middleware/email-sender');

const router = new express.Router()

router.post('/register', (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body.name)

  let result;
  if (name.length < 3) {
    result = {
      success: false,
      message: ["Name must be at least 3 letters! \n"]
    }
  }
  if (password.length < 8) {
    result = {
      success: false,
      message: result.message + "Password must be at least 8 symbols! \n"
    }
  }
  if (result) {
    console.log(result.message)
    res.json({ result })
  }
  userModel.exists({ email: email })
    .then(exists => {
      if (exists) {
        res.json({
          result: {
            success: false,
            message: 'Email already exists!'
          }
        })
      }
      if (!result) {
        userModel.create(req.body)
          .then(user => {
            transporter.sendEmail(user.email, user._id);
            res.json({
              result: {
                success: true,
                message: 'You have successfuly registered!'
              }
            })
          });

      }
    })
})
router.get('/confirm/:token', (req, res, next) => {
  const token = req.params.token;

  userModel.findOne({ _id: token })
    .then(user => {
      if (token === user._id) {
        userModel.updateOne({ _id: token }, { emailConfirmed: true })
          .then(res.json({ success: true }))
      }
    })
})

router.get('/users', verifyJwt, (req, res, next) => {

  userModel.find({})
    .then(users => res.json({ userCollection: users }))

})
router.post('/login', (req, res, next) => {

  let result;
  const { email, password } = req.body;
  userModel.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.json({
          result: {
            success: false,
            message: 'Invalid Username or Password!'
          }
        })
      }
      else {
        bcrypt.compare(password, user.password)
          .then(match => {
            if (!match) {
              res.json({
                result: {
                  success: false,
                  message: "Invalid Username or Password!"
                }
              })
            }
            if (!user.emailConfirmed) {
              res.json({
                result: {
                  success: false,
                  message: "Confirm Your email!"
                }
              })
              return;
            }
            const token = jwt.sign({ id: user._id }, config.jwtSecret);
            result = {
              success: true,
              message: "You have successfuly logged in! " + new Date().toLocaleString()
            }
            console.log(result.message)
            res.cookie(config.authCookie, token)
            res.status(200).json({ result, token, user });
          });
      }

    }).catch(err => console.log(err));
})
router.get('/isAuth', verifyJwt, (req, res) => {
  res.json('Authentication Successful!');
})

router.get('/block/:userid', (req, res, next) => {

  const returnUsers = () => userModel.find({})
    .then(users => res.json({ userCollection: users }))
  userModel.findOne({ _id: req.params.userid })
    .then(user => {
      const { name, banned } = user
      console.log(name, banned);

      userModel.updateOne({ _id: req.params.userid }, { banned: !user.banned })
        .then(returnUsers)

    })
})
router.get('/makeAdmin/:userid', (req, res, next) => {
  const returnUsers = () => userModel.find({})
    .then(users => res.json({ userCollection: users }))

  userModel.findOne({ _id: req.params.userid })
    .then(user => {
      const { name, role } = user;

      if (role === 'user') {
        userModel.updateOne({ _id: req.params.userid }, { role: 'admin' })
          .then(returnUsers)
      }
      else {
        userModel.updateOne({ _id: req.params.userid }, { role: 'user' })
          .then(returnUsers)
      }
    })
})
router.post('/report', (req, res, next) => {
  var { email, message } = req.body;
  console.log('report')
  reportModel.create({ email, content: message, date: Date.now() })
    .then(() => {
      reportModel.find({})
        .then(reports => { res.json(reports) })
    })


  // var mail = {
  //   from: email,
  //   to: config.email,
  //   subject: `${email} reported this: `,
  //   text: message
  // }
  // transporter.sendMail(mail)
  // .then(result => res.json(result))

})
router.get('/user/_logout', (req, res, next) => {
  res.clearCookie(config.authCookie);
  res.json({ success: true });
})
module.exports = router
