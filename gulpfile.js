var gulp = require('gulp');
    connect = require('gulp-connect');
var cssMin = require('gulp-css');
var build = require('gulp-build');
var install = require('gulp-start');






gulp.task('start', function() {
  gulp.src(['package.json'])
      .pipe(install());
  connect.server();
  console.log('hello gulp!');  
});

gulp.task('build', function(){
  gulp.src('/*.html')
      .pipe(build({GA_ID: '123456'}))
      .pipe(gulp.dest('dist'))
});



        

gulp.task('cssMinify', function(){
  return gulp.src('/public/css/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('build/'));
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
  });
});











gulp.task('default', ['start', 'build', 'webserver', 'cssMinify']);
