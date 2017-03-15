var mongoose = require('mongoose');
var Media = mongoose.model('Media',
    {
        title: String,
        content: String,
        url: String,
        type: Number,
        author_id: Number,
        happen_id: Number,
        comment: Array
    });
module.exports = Happen;
