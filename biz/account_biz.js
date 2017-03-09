var mongoose = require('mongoose');
var Account=require('../models/account');
function AccountBiz() {
    this.register = function (nick_name, mobile, password) {
        if (!nick_name || nick_name.length < 0) {
            throw new Error('nick_name is required', -1);
        }
        if (!mobile || mobile.length < 0) {
            throw new Error('mobile is required', -1);
        }
        if (!password || password.length < 0) {
            throw new Error('password is required', -1);
        }
        var account = new Account({
            nick_name: nick_name,
            mobile: mobile,
            password: password,
        });
        mongoose.connect('mongodb://localhost/whathapp');
        account.save(function (err) {
            if (err) {
                throw err;
            }
        });
    };
};

module.exports = new AccountBiz();