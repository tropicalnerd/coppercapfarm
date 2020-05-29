'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./source/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./site'))
    .pipe(browserSync.stream())
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "site"
        }
    });

    // gulp.watch('src/images/*.{jpg,jpeg,png}', gulp.series('images'));
    // gulp.watch('src/images/*.svg', gulp.series('svgCopy'));
    gulp.watch('source/sass/*.scss', gulp.series('sass'));
    gulp.watch('site/index.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));
