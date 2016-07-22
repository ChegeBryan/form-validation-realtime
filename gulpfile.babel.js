import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('transpile', () => {
   return gulp.src('js/src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('js/dist'));
});

gulp.task('default', ['transpile']);
