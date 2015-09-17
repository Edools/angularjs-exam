var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');
    less = require('gulp-less');

var paths = {
    styles : [
        'src/assets/less/main.less'
    ]
};

// Html task
gulp.task('html', function() {
  gulp.src('*.html')
  .pipe(connect.reload());
});

//Js task
gulp.task('js', function() {
  gulp.src('./src/app/**/*.js')
  .pipe(connect.reload());
});

// Watch our changes
gulp.task('watch', function(){
  //html
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['./src/app/**/*.js'], ['js']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('less', function() {

    gulp.src(paths.styles)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('src/assets/css'));

});



// Start the tasks
gulp.task('default', ['connect','watch', 'less']);
