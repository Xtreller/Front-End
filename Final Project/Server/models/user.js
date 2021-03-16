const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: { type: String, minlength: 3 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture : {},
    role : {type: String ,default: 'user'},
    banned : {type: Boolean ,default: false},
});
module.exports = new mongoose.model('User', userModel);