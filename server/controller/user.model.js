var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    user_id: { type: String, required: true, unique:true },
    user_name:{ type: String, required: true },
    created:    { type: Date, default: Date.now },
    updated:    { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
