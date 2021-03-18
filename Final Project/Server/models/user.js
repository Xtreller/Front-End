const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userModel = new mongoose.Schema({
    name: { type: String, minlength: 3 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: {},
    role: { type: String, default: 'user' },
    banned: { type: Boolean, default: false },
});
userModel.pre('save', function (done) {
    const user = this;

    if (!user.isModified('password')) {
        done();
        return;
    }

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) { done(err); return; }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) { done(err); return; }
            user.password = hash;
            done();
        });
    });
});
module.exports = new mongoose.model('User', userModel);