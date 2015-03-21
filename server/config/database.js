var mongoose = require('mongoose');
var path = require('path');

module.exports = function(){
  var config = require(path.join(__dirname, '../../config.json'));
  var env = process.env.NODE_ENV || "development";
  console.log(env);
  if (env === 'development') {
    mongoose.connect(config.db.mongoUrl);
  } else if (env === 'vmdev') {
    mongoose.connect(config.db.mongoUrlvm);
  }
};
