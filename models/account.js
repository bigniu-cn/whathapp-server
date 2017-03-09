var mongoose = require('mongoose');
var Account = mongoose.model('Account',
    {
        nick_name: String,
        mobile: String,
        password: String,
    });
module.exports = Account;
