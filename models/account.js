var mongoose = require('mongoose');
var Account = mongoose.model('Account',
    {
        uid: Number,
        mobile: String,
        password: String,
    });
module.exports = Account;
