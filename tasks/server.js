var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var confPath = require('../config.json').paths;

module.exports = {
    serve: function(){
        nodemon({
            script: './server/app.js',
            ext: 'js html jsx'
        })
        .on('change', function(){
          console.log("changed");
        })
        .on('restart', function(){
          console.log("restarted!");
        });
    }
};
