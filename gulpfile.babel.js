import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('transpile', () => {
   return gulp.src('src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'));
}, () => {
   console.log('Successfully transpiled to ES5');
});

gulp.task('default', ['transpile']);
