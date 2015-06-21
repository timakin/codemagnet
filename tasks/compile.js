var gulp       = require('gulp');
var concat     = require('gulp-concat');
var less       = require('gulp-less');
var minify     = require('gulp-minify-css');
var plumber    = require('gulp-plumber');
var uglify     = require('gulp-uglify');

var babelify   = require('babelify');
var sync       = require('browser-sync');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

var confPath   = require('../config.json').paths;

module.exports = {

  jsx: function(){
    console.log("start-task: jsx");
    browserify({
        entries: [confPath.resource.scripts],
        debug: true,
        extensions: ['.es6', '.js', '.jsx']
    })
    .transform(babelify)
    .bundle()
    .pipe(plumber(function(res){
        sync.notify("js build error");
    }))
    .pipe(source('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest(confPath.publish))
    .on('end',function(){
        sync.notify('ファイルを更新');
        sync.reload();
    });

  },

  less: function(){
    console.log("start-task: less");
    return gulp.src(confPath.resource.styles)
      .pipe(plumber(function(res){
          sync.notify("jsx compile error");
      }))
      .pipe(concat('style.less'))
      .pipe(less())
      .pipe(minify())
      .pipe(gulp.dest(confPath.publish))
      .on('end',function(){
          sync.notify('ファイルを更新');
          sync.reload();
      });
  }

};
