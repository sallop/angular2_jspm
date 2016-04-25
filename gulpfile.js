var gulp = require('gulp');

gulp.task('default', ['css','html']);

gulp.task('css', function(){
  gulp.src('src/*.css')
      .pipe(gulp.dest('build/'));
});

gulp.task('html', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('build/'));
});
