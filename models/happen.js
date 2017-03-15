var mongoose = require('mongoose');
var Happen = mongoose.model('Happen',
    {
        uid: String,
        title: String,
        content: String,
        media: Array,
        comment: Array
    });
module.exports = Happen;
