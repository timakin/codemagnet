var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    user_id: { type: String},
    code: {type: String},
    description: {type: String},
    section: {type:String},
    created:    { type: Date, default: Date.now },
    updated:    { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', UserSchema);
