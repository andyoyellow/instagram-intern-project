var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel');

//Don't need to compile anything but clone src/html to outputDir and livereload that shit
gulp.task('html', function(){
  return gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function(){
  return sass('src/sass/styles.scss')
    .on('error', function(err) {
      console.log('Error!', err.message);
    })
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('babel', function () {
  return gulp.src('src/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

//Watch for any changes to files in these folders, and if so, run the gulp tasks
gulp.task('watch', function(){
  gulp.watch('*.html', ['html']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['babel']);
});

//Boot up a server on localhost:8000 pointing to the outputDir as the root
gulp.task('connect', function(){
  connect.server({
    port: 3000,
    livereload: true
  });
});

//When you run gulp command in cli, run all these tasks
gulp.task('default', ['html', 'sass', 'babel', 'watch', 'connect']);
