var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
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
      .pipe(minify())
      .pipe(gulp.dest(confPath.dest.styles));
  }

};
