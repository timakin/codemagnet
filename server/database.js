var mongoose = require('mongoose');
var path = require('path');

module.exports = function(){
  var config = require(path.join(__dirname, '../config.json'));
  mongoose.connect(config.mongoUrl);
};
