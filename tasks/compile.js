var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var react = require('gulp-react');
var confPath = require('../config.json').paths;

module.exports = {

  jsx: function(){
    console.log("jsx");
    return gulp.src(confPath.resource.react)
      .pipe(concat('bundle.jsx'))
      .pipe(react())
      .pipe(gulp.dest(confPath.dest.react));
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
