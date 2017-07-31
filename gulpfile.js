//JS
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('scss/style.scss')
        .pipe(sass())    // ici on utilise gulp-sass
        .pipe(gulp.dest('css'))
});

gulp.watch('scss/**/*.scss', ['sass']);
