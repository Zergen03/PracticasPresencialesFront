const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass-compile', function () {
  return gulp.src('source/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('builds'));
});

gulp.task('watch', function () {
  gulp.watch('source/**/*.scss', gulp.series('sass-compile'));
});
