const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

function compilaSass() {  
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'))
}

function comprimeJavascript() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.watch = function () {  
    gulp.watch('./src/styles/*.scss',{ignoreInitial:false},gulp.parallel(compilaSass))
    gulp.watch('./src/scripts/*.js',{ignoreInitial:false},gulp.parallel(comprimeJavascript))
}

exports.build = gulp.parallel(compilaSass,comprimeJavascript)