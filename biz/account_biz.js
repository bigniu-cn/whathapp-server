var Account = require('../models/account');
var User = require('../models/user');
function AccountBiz() {
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
        Account.findOne({mobile: mobile, password: password}, function (err, model) {
            if (err) {
                throw err;
            }
            if (model) {
                throw new Error('手机号已经注册过,您可以找回密码,进行登录', -1);
            }
            var user = new User({
                nick_name: nick_name,
                mobile: mobile,
            });
            user.save(function (err) {
                if (err) {
                    throw err;
                }
                var account = new Account({
                    id: user.id,
                    mobile: mobile,
                    password: password,
                });

                account.save(function (err) {
                    if (err) {
                        throw err;
                    }
                    callback();
                });
            });
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