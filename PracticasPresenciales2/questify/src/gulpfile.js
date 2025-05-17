// gulpfile.js (versión compatible con ESM)
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass'; // ← esta línea evita el warning de deprecated

const sassCompiler = gulpSass(sass);

export function sassCompile() {
  return gulp.src('source/main.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(gulp.dest('builds'));
}

export function watch() {
  gulp.watch('source/**/*.scss', sassCompile);
}
