var Model = require('../models/happen');

function HappenBiz() {
    this.create = function (map, callback) {

        var model = new Model({
            uid: map.uid,
            title: map.title,
            content: map.content,
            media: map.media,
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

module.exports = new HappenBiz();