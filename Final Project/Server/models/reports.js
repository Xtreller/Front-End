const mongoose = require('mongoose');

const reportModel = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    content: { type: String, required: true },
    date: Date,

})
module.exports = new mongoose.model('Report', reportModel);
