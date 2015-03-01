var gulp = require('gulp');
var path = require('path');

var tasks = {
  compile: require('./tasks/compile.js')
};

gulp.task('jsx', tasks.compile.jsx);
gulp.task('less', tasks.compile.less);


gulp.task('default', ['less','jsx']);
