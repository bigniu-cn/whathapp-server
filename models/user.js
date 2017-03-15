var mongoose = require('mongoose');
var User = mongoose.model('User',
    {
        uid: Number,
        nick_name: String,
        mobile: String,
        email: String,
        avatar: String,
        words: String,
    });
module.exports = User;
