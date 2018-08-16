<<<<<<< HEAD
const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const minifyImg = require('gulp-imagemin');
const uglifyes = require('gulp-uglifyes');
gulp.task('css',()=>{
    gulp.src('./public/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./public/css'));
});
gulp.task('js',()=>{
    gulp.src('./public/lib/fancybox/*.js')
    .pipe(uglifyes({
        ecma:5,
        warnings:true
    }))
    .pipe(gulp.dest('./public/lib/fancybox'));
})
gulp.task('image',()=>{
    gulp.src('./public/images/*')
    .pipe(minifyImg([
        minifyImg.jpegtran({progressive:true}),
    ]))
    .pipe(gulp.dest('./public/images'));

});
gulp.task('default',['css','js','image']);
=======
var gulp = require('gulp');
gulp.task('default',function(){

});
>>>>>>> bcc078cd7e0f4c6215b4a0faff96357686af3350
