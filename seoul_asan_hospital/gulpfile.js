//gulp modules

var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();

// var minify = require('gulp-minify');
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');

//gulp directory

//-------------------------sample

//var path = {
//   css : {src:'./public/src/scss/**/*.scss',
//         dest:'./public/dist/css'},
//
//   jade : {src:'./public/src/jade/**/*.js',
//           dest:'./public/dist'},
//
//   js : {src:'./public/src/js/**/*.js',
//         dest:'./public/dist/js'}
//
//};


//Static server + watching scss/html files

gulp.task('serve', ['sass','jade'], function(){
      browserSync.init({
         server:"./public/dist"
      });

      gulp.watch('./public/src/jade/**/*.jade',['jade']);
      gulp.watch('./public/src/scss/**/*.scss',['sass']);
      gulp.watch("./public/dist/*.html").on('change',browserSync.reload );
         //change => 브라우저싱크 변경기능
});


//Compile sass into CSS & auto-inject into browsers

// gulp.task('sass',function(){
//    return gulp.src("./public/src/scss/**/*.scss")
//          .pipe(sass())
//          .pipe(gulp.dest('./public/dist/css'))
//          .pipe(browserSync.stream());
// });

//jade
gulp.task('jade',function(){
    return gulp.src('./public/src/jade/**/*.jade')
         .pipe(jade({pretty:true}))
         .pipe(gulp.dest('./public/dist'))
         .pipe(browserSync.stream());

});

gulp.task('sass', function() {
   return gulp.src('./public/src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('default',['serve']);

