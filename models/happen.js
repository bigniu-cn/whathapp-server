var mongoose = require('mongoose');
var Happen = mongoose.model('Happen',
    {
        ref_id: String,
        uid: String,
        title: String,
        content: String,
        media: Array,
        comment: Array,
        location: Array,
        ts: Number
    });
module.exports = Happen;
