const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

// compile scss into css
function style() {
    // find scss file
    return gulp.src('./scss/**/*.scss')
    // pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
    // save the compiled css file
        .pipe(gulp.dest('./css'))
    // stream changes to all browsers
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js', browserSync.reload)
}

exports.style = style
exports.watch = watch