var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

//Task for Connect
gulp.task('connect', function() {
  connect.server({
    root: 'compartments',
    livereload: true
  });
});

//Task for Sass
gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({ errLogToConsole: true}))
    .pipe(gulp.dest('./compartments/styles'));
});

//Task for Livereload
gulp.task('livereload', function() {
  gulp.src('./compartments/**/**/*')
    .pipe(connect.reload());
});

//Task for Watch
gulp.task('watch', function() {
  gulp.watch('./sass/**/*', ['sass']);
  gulp.watch('./compartments/**/**/*', ['livereload']);
});

//Default Task
gulp.task('default', ['connect', 'watch', 'sass']);