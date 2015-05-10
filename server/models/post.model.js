var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    code: { type: String },
    description: { type: String },
    section: { type: String },
    //user_id: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Post', PostSchema);
