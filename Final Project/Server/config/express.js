const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const config = require('./config');

const app = express();

module.exports = (app) => {

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(passport.initialize())
    app.use(cors())


};