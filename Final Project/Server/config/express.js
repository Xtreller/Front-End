const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const config = require('./config');

const app = express();

module.exports = (app) => {

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
    app.use(bodyParser.text());
    app.use(passport.initialize());


};