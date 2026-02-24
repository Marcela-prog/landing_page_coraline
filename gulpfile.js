const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function copiarJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));

}

function watch() {
    gulp.watch('src/scss/**/*.scss', compilarSass);

    gulp.watch('src/js/**/*.js', copiarJS);
}

exports.sass = compilarSass;
exports.js = copiarJS;
exports.watch = watch;
exports.default = gulp.series(
    gulp.parallel(compilarSass, copiarJS),
    watch
);