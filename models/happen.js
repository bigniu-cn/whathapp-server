var mongoose = require('mongoose');
var Happen = mongoose.model('Happen',
    {
        title: String,
        content: String,
        author_id: Number,
        media: Array,
        comment: Array
    });
module.exports = Happen;
