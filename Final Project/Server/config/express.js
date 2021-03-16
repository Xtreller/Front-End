const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')
const config = require('./config');

const app = express();

module.exports = (app) => {

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(passport.initialize())
    app.use(cors())

    passport.use('local-signup', localSignupStrategy)
    passport.use('local-login', localLoginStrategy)

    // routes
    
    const dbConnectionPromise = require('./database')();

    dbConnectionPromise.then(() => {
      app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you: http://localhost:${config.port}/`));
    });


};