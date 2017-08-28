var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  modifyFile = require('gulp-modify-file'),
  concat = require('gulp-concat'),
  fs = require('fs');

gulp.task('browsify', function() {
  return gulp
    .src('app.js')
    .pipe(modifyFile(function(content, path, file) {
      return content.replace('module.exports = ', '');
    }))
    .pipe(concat('easy-cloner.js'))
    .pipe(gulp.dest('browser'));
});

gulp.task('uglify-browsify', function() {
  return gulp
    .src('app.js')
    .pipe(modifyFile(function(content, path, file) {
      return content.replace('module.exports = ', '');
    }))
    .pipe(uglify())
    .pipe(concat('easy-cloner.min.js'))
    .pipe(gulp.dest('browser'));
});

gulp.task('default', ['browsify', 'uglify-browsify']);
