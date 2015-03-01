var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var confPath = require('../config.json').paths;

module.exports = {

  jsx: function(){
    console.log("jsx");
  },

  less: function(){
    console.log('test');
    return gulp.src(confPath.resource.styles)
      .pipe(concat('style.less'))
      .pipe(less())
      .pipe(gulp.dest(confPath.dest.styles));
  }

}
