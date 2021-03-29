const mongoose = require('mongoose');

const commentsModel = new mongoose.Schema({
    movieid: {},
    comments: [String],
    Date: Date,
    Creator: {}

})
module.exports = new mongoose.model('Comment', commentsModel);
