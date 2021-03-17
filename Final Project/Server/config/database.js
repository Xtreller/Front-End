const config = require('./config');
const mongoose = require('mongoose');

module.exports = ()=>{
    console.log('connection to db successful!')
    return mongoose.connect(config.dbConnectionString);
}