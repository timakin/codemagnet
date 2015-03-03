var gulp = require('gulp');
var path = require('path');

var tasks = {
  compile: require('./tasks/compile.js'), server: require('./tasks/server.js')
};

gulp.task('jsx', tasks.compile.jsx);
gulp.task('less', tasks.compile.less);
gulp.task('serve', tasks.server.serve);

gulp.task('default', ['less', 'jsx', 'serve']);
