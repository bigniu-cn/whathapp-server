var Model = require('../models/happen');

function HappenBiz() {
    this.create = function (map, callback) {

        var model = new Model(map);
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

    this.ListByLocation = function (lat, lng, last_id, count, callback) {
        if (!count) {
            count = 10;
        }
        Model.find({}).limit(count).exec(function (err, model) {
            if (err) {
                console.log(err);
            }
            if (model) {

            }
            callback(model);
        });
    };

}

module.exports = new HappenBiz();