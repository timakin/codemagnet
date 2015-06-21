var gulp       = require('gulp');
var concat     = require('gulp-concat');
var less       = require('gulp-less');
var minify     = require('gulp-minify-css');
var plumber    = require('gulp-plumber');
var streamify  = require('gulp-streamify');
var uglify     = require('gulp-uglify');

var babelify   = require('babelify');
var sync       = require('browser-sync');
var browserify = require('browserify');
var path       = require('path');
var source     = require('vinyl-source-stream');

var config     = require('./config.json').build;

var tasks = {
  server: require('./tasks/server.js')
};

gulp.task('bundle:js', function() {
  browserify({
      entries: [config.resource.scripts],
      debug: true,
      extensions: config["EXTENSIONS"],
  })
  .transform(babelify)
  .bundle()
  .pipe(plumber())
  .pipe(source('bundle.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest(config["DEST_DIR_PATH"]))
});

gulp.task('bundle:stylesheet', function() {
  gulp.src(config.resource.styles)
    .pipe(plumber())
    .pipe(concat('style.less'))
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest(config["DEST_DIR_PATH"]))
});

gulp.task('serve', tasks.server.serve);
gulp.task('vmserve', tasks.server.vmserve);
gulp.task('default', ['bundle:stylesheet', 'bundle:js', 'serve']);
