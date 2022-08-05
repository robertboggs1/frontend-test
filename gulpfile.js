'use strict';
 
var scssDir = './scss',
    cssDir = './css';

var gulp            = require('gulp');
var sass            = require('gulp-sass')(require('node-sass'));
var postcss         = require('gulp-postcss');
var sourcemaps      = require('gulp-sourcemaps');
var autoprefixer    = require('autoprefixer');
var rename          = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src(scssDir + '/import.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(cssDir));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(scssDir + '/**/*.scss', gulp.series('sass'));
});