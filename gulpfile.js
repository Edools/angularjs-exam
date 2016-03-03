/**
 * Created by leandro on 01/03/16.
 */
"use strict";

const gulp      = require("gulp");
const sass      = require("gulp-sass");

const DEV_PATH  = "client/assets/stylesheets/main.scss";
const DIST_PATH = "client/assets/stylesheets/";

gulp.task("sass", () =>  {
  return gulp.src(DEV_PATH)
    .pipe(sass())
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task("default", ["sass"], () => {
  gulp.watch("client/assets/stylesheets/**/*.scss", ["sass"]);
});
