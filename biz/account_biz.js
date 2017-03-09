var mongoose = require('mongoose');
var Account = require('../models/account');
function AccountBiz() {
    mongoose.connect('mongodb://localhost/whathapp');
    this.register = function (nick_name, mobile, password, callback) {
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

        account.save(function (err) {
            if (err) {
                throw err;
            }
            callback();
        });
    };

    this.login = function (mobile, password, callback) {
        Account.findOne({mobile: mobile, password: password}, function (err, model) {
            if (err) {
                console.log(err);
            }
            if (model) {
                model.password = null;
            }
            console.log(model);
            callback(model);
        });
    };

    this.logout = function (uid) {
    };
}

module.exports = new AccountBiz();