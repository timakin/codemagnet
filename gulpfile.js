var gulp       = require('gulp');
var concat     = require('gulp-concat');
var less       = require('gulp-less');
var gulpif     = require('gulp-if');
var minify     = require('gulp-minify-css');
var nodemon    = require('gulp-nodemon');
var plumber    = require('gulp-plumber');
var streamify  = require('gulp-streamify');
var uglify     = require('gulp-uglify');

var babelify   = require('babelify');
var sync       = require('browser-sync');
var browserify = require('browserify');
var path       = require('path');
var source     = require('vinyl-source-stream');

var config        = require('./config.json').build;
var isDevelopment = !process.env.NODE_ENV ||
                     process.env.NODE_ENV === 'development';

gulp.task('bundle:js', function() {
  browserify({
      entries: config["JS_ENTRY_POINT"],
      debug: true,
      extensions: config["EXTENSIONS"],
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulpif(isDevelopment, plumber()))
  .pipe(gulpif(!isDevelopment, streamify(uglify())))
  .pipe(gulp.dest(config["DEST_DIR_PATH"]))
});

gulp.task('bundle:stylesheet', function() {
  gulp.src(config["STYLESHEET_ENTRY_POINT"])
    .pipe(gulpif(isDevelopment, plumber()))
    .pipe(concat('style.less'))
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest(config["DEST_DIR_PATH"]))
});

gulp.task('serve', function() {
  nodemon({
      script: './server/app.js',
      ext: 'js html jsx',
      ignore: ['bundle.js', 'style.css']
  })
  .on('change', ['js', 'less'])
  .on('restart', function(){
    console.log("restarted!");
  });
});

gulp.task('vmserve', function() {
  nodemon({
      script: './server/app.js',
      ext: 'js html jsx',
      ignore: ['bundle.js', 'style.css'],
      env: { 'NODE_ENV': 'vmdev' }
  })
  .on('change', ['js', 'less'])
  .on('restart', function(){
    console.log("restarted!");
  });
});

gulp.task('default', ['bundle:stylesheet', 'bundle:js', 'serve']);
