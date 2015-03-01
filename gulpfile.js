var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var tasks = {
  build: require('./tasks/build')
};

gulp.task('default', tasks.build);

gulp.task('less', function () {
  return gulp.src('./client/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/style'));
});
