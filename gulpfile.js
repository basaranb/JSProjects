const gulp = require("gulp");
const jshint = require("gulp-jshint");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("processHTML", done => {
  gulp.src("*.html").pipe(gulp.dest("dist"));
  done();
});

gulp.task("processJS", done => {
  gulp
    .src("scripts.js")
    .pipe(
      jshint({
        esversion: 8
      })
    )
    .pipe(jshint.reporter("default"))
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
  done();
});

gulp.task("babelPolyfill", done => {
  gulp
    .src("node_modules/babel-polyfill/browser.js")
    .pipe(gulp.dest("dist/node_modules/babel-polyfill"));
  done();
});

// Watch files for changes

gulp.task("watch", done => {
  gulp.watch("*.js", gulp.series("processJS"));
  gulp.watch("*.html", gulp.series("processHTML"));

  gulp.watch("dist/*.js", browserSync.reload);
  gulp.watch("dist/*.html", browserSync.reload);
  done();
});

gulp.task("browserSync", () => {
  browserSync.init({
    server: "./dist",
    port: 8080,
    ui: {
      port: 8081
    }
  });
});

gulp.task(
  "default",
  gulp.parallel(
    "processHTML",
    "processJS",
    "babelPolyfill",
    gulp.series("watch")
  )
);
