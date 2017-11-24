var gulp =                require('gulp')
var gutil =               require('gulp-util')
var jshint =              require('gulp-jshint')
var sass =                require('gulp-sass')
var concat =              require('gulp-concat')
var uglify =              require('gulp-uglify')
var rename =              require('gulp-rename')
var sh =                  require('shelljs')
const runSequence =       require('run-sequence')
const babel =             require('gulp-babel')
const plumber =           require('gulp-plumber')
const browserSync =       require('browser-sync').create()
const reload =            browserSync.reload
const rm =                require('gulp-rm')
const PATHS = {
  js: [`www/js/app.js`, `www/components/**/*.js`],
  css: [`scss`],
  components: ['www/components/'],
  node_modules: ['www/node_modules/']
}

const BUILD_DIR = 'build'
const APP_DIR = 'www/'

gulp.task('copy-index', () => {
  gulp.src(`www/index.html`)
  .pipe(gulp.dest(BUILD_DIR))
})

gulp.task('copy-views', () => {
  gulp.src([`${PATHS.components}/**/*.html`])
  .pipe(gulp.dest(`${BUILD_DIR}/components`))
})

gulp.task('sass', () => {
  gulp.src([`${PATHS.components}/**/*.scss`])
  .pipe(sass())
  .pipe(rename('app.css'))
  .pipe(gulp.dest(`${BUILD_DIR}/css`))
})
 
gulp.task('copy-lib', () => {
  gulp.src(`${PATHS.node_modules}/**/*`)
  .pipe(gulp.dest(`${BUILD_DIR}/lib`))
})

gulp.task('clean', () => {
  gulp.src(`${BUILD_DIR}/**/*`, { read: false })
  .pipe(rm())
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
  .pipe(gulp.dest(`${BUILD_DIR}`))
})

gulp.task('watch', () => {
  gulp.watch(PATHS.js, ['js-app']).on('change', () => browserSync.reload())
  gulp.watch(`${PATHS.components}/**/*.html`, ['copy-views']).on('change', () => browserSync.reload())
  gulp.watch(`www/index.html`, ['copy-index']).on('change', () => browserSync.reload())
  gulp.watch(`${PATHS.node_modules}/**/*`, ['copy-lib']).on('change', () => browserSync.reload())
  gulp.watch('scss/**/*.scss', ['sass']).on('change', () => browserSync.reload())
})

gulp.task('default',
  runSequence(
    'clean',
    ['copy-index', 'copy-views', 'copy-lib', 'sass', 'js-app'],
    'browser-sync',
    'watch'
  )
)