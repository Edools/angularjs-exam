const gulp =                require('gulp')
const gutil =               require('gulp-util')
const jshint =              require('gulp-jshint')
const sass =                require('gulp-sass')
const concat =              require('gulp-concat')
const uglifyJS =            require('gulp-uglify')
const uglifycss =           require('gulp-uglifycss')
const imagemin =            require('gulp-imagemin')
const htmlmin =             require('gulp-htmlmin')
const rename =              require('gulp-rename')
const sh =                  require('shelljs')
const runSequence =         require('run-sequence')
const babel =               require('gulp-babel')
const plumber =             require('gulp-plumber')
const browserSync =         require('browser-sync').create()
const reload =              browserSync.reload

const BUILD_DIR =           'build'
const APP_DIR =             'www/'
const PATHS = {
  js: [`www/js/app.js`, `www/components/**/*.js`],
  css: [`scss`],
  components: ['www/components/'],
  lib: ['www/lib/']
}
const uglifyJSOptions = {
  compress: {},
  mangle: {}
}

gulp.task('copy-index', () => {
  gulp.src(`www/index.html`)
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(BUILD_DIR))
})

gulp.task('copy-views', () => {
  gulp.src([`${PATHS.components}/**/*.html`])
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(`${BUILD_DIR}/components`))
})

gulp.task('copy-lib', () => {
  gulp.src(`${PATHS.lib}/**/*`)
  .pipe(gulp.dest(`${BUILD_DIR}/lib`))
})

gulp.task('copy-img', () => {
  gulp.src([`${APP_DIR}/img/**/*`], {
    base: `${APP_DIR}/img`
  })
  .pipe(imagemin())
  .pipe(gulp.dest(`${BUILD_DIR}/img`))
})

gulp.task('sass', () => {
  gulp.src([`${PATHS.components}/**/*.scss`])
  .pipe(sass())
  .pipe(uglifycss({
    "maxLineLen": 80,
    "uglyComments": true
  }))
  .pipe(rename('app.css'))
  .pipe(gulp.dest(`${BUILD_DIR}/css`))
})

gulp.task('browser-sync', () => {
  browserSync.init({
    port: 8080,
    server: {
      baseDir: BUILD_DIR,
      routes: {
        '/static': 'static'
      },
    },
  })
})

gulp.task('js-app', () => {
  gulp.src(PATHS.js)
  .pipe(plumber({
    errorHandler: e => console.log('Error -', e)
  }))
  .pipe(concat('build.js'))
  .pipe(babel({
    compact: false,
    presets:['es2015'],
    plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
  }))
  // .pipe(uglifyJS(uglifyJSOptions))
  .pipe(gulp.dest(`${BUILD_DIR}`))
})

gulp.task('watch', () => {
  gulp.watch(PATHS.js, ['js-app']).on('change', () => browserSync.reload())
  gulp.watch(`${PATHS.components}/**/*.html`, ['copy-views']).on('change', () => browserSync.reload())
  gulp.watch(`www/index.html`, ['copy-index']).on('change', () => browserSync.reload())
  gulp.watch(`${PATHS.lib}/**/*`, ['copy-lib']).on('change', () => browserSync.reload())
  gulp.watch(`${PATHS.components}/**/*.scss`, ['sass']).on('change', () => browserSync.reload())
})

gulp.task('default',
  runSequence(
    ['copy-index', 'copy-lib', 'copy-views', 'copy-img', 'sass', 'js-app'],
    'browser-sync',
    'watch'
  )
)