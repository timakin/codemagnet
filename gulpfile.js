var gulp = require('gulp');


var tasks = {
  build: require('./tasks/build')
};

gulp.task('default', tasks.build);
