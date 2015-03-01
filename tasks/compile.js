var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
// var source = require('vinyl-source-stream')
var confPath = require('../config.json').paths;

module.exports = {

  jsx: function(){
    console.log("jsx");
  },

// confPath.compile.styles
  less: function(){
    console.log('test');
    return gulp.src(['./client/**/*.less'])
      .pipe(concat('style.less'))
      .pipe(less())
      .pipe(gulp.dest('./client/public'));
  }

}
