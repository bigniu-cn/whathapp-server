var Model = require('../models/account');

function TempBiz() {
    this.create = function (nick_name, mobile, password, callback) {
        if (!nick_name || nick_name.length < 0) {
            throw new Error('nick_name is required', -1);
        }
        var model = new Model({
            id: user.id,
            mobile: mobile,
            password: password,
        });

        model.save(function (err) {
            if (err) {
                throw err;
            }
            callback();
        });
    };
    this.findById = function (id, callback) {
        Model.findById(id, function (err, model) {
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
}

module.exports = new TempBiz();