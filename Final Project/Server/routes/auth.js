const express = require('express')
const bcrypt =  require('bcrypt')
var users = require('../data/users');
const jwt = require('jsonwebtoken')
const userModel = require('../models/user');
const config = require('../config/config')
const router = new express.Router()





router.post('/register', (req, res, next) => {
  const { name, email, password } = req.body;


  let result;
  if (name.length < 3) {
    result = {
      success: false,
      message: "Name must be at least 3 charackters!",
      errors: 'Check if form is valid'
    };
  }
  if (password.length < 8) {
    result = {
      success: false,
      message: "Password must be at least 8 symbols long1",
      errors: 'Check if form is valid'
    };
  }

  userModel.exists({ email: email })
    .then(exists => {
      if (exists) {
        result = {
          success: false,
          message: 'Email already exists',
          errors: 'Check if form is valid'
        };
      }
      if (!err) {
        users.save(req.body);
        return result = {
          success: true,
          message: 'You have successfuly registered!',
        };
      }

    })
  return res.json(result);
})

router.get('/users', (req, res, next) => {

  userModel.find({})
    .then(users => res.json({ userCollection: users }))

})
router.post('/login', (req, res, next) => {

  let result;
  const { email, password } = req.body;
  userModel.findOne({ email: email })
    .then(user => {
      if (!user) {
        return result = {
          success: false,
          message: 'User not found'
        }
      }
      else {
        bcrypt.compare(password, user.password)
          .then(match => {
            if (!match) {
              return result = {
                success:false,
                message:"Invalid Username or Password!"
              }
            }
            const token = jwt.sign({ id: user._id }, config.jwtSecret);
            result={
              success:true,
              message:"You have successfuly logged in!"
            }
            console.log(result)
            res.cookie(config.authCookie, token)
            res.status(200).json({result,token,user});
            });
      }
    }).catch(err=>console.log(err));
})


module.exports = router
