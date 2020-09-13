'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css');
const cssDeclarationSorter = require('css-declaration-sorter');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const svgmin = require('gulp-svgmin');
const pngquant = require('imagemin-pngquant');
const plumber = require('gulp-plumber');
const bulkSass = require('gulp-sass-bulk-import');
const browserSync = require('browser-sync'); 
const cssPlugin = [
  autoprefixer({cascade: false}),
  cssDeclarationSorter({order: 'smacss'}),
  mqpacker()
];

/*---------- directory ----------*/
const editDirectory = {
  html: './',
  scss: './_src/scss/**/',
  js: './_src/js/',
  img: './_src/img/'
}
const destDirectory = {
  css: './src/css/diff/',
  minifyCss: './src/css/',
  js: './src/js/',
  img: './src/img/'
}

/*---------- scss圧縮 ----------*/
gulp.task("css.compile", function () {
  return gulp.src('./_src/scss/export/*.scss')
  .pipe(bulkSass())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss(cssPlugin))
  .pipe(gulp.dest(destDirectory.css));
});
gulp.task("css.minify", function () {
  return gulp.src('./_src/scss/export/*.scss')
  .pipe(bulkSass())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss(cssPlugin))
  .pipe(cleancss())
  .pipe(rename({extname: '.min.css'}))
  .pipe(gulp.dest(destDirectory.minifyCss));
});

/*---------- js圧縮 ----------*/
gulp.task('js.minify', function() {
  return gulp.src(editDirectory.js + '*.js')
  .pipe(plumber())
  .pipe(uglify({output: {comments: 'some'}}))
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest(destDirectory.js));
});

/*---------- img圧縮 ----------*/
gulp.task('img.minify', function() {
  gulp.src([editDirectory.img + '*.png', editDirectory.img + '*.jpg'])
  .pipe(imagemin([pngquant({quality: [0.6, 0.9]})]))
  .pipe(gulp.dest(destDirectory.img)),
  gulp.src(editDirectory.img + '*.svg')
  .pipe(svgmin())
  .pipe(gulp.dest(destDirectory.img));
});

/*---------- browser同期 ----------*/
gulp.task('browser.sync', function(done) {
  browserSync.init({
      server : {baseDir : './', index : 'top.html'}
  });
  done();
});

/*---------- browser更新 ----------*/
gulp.task('browser.reload', function(done) {
  browserSync.reload();
  done();
});

/*---------- files監視 ----------*/
gulp.task('files.watch', function(done) {
  gulp.watch([editDirectory.html + '*.html'], gulp.series('browser.reload'));
  gulp.watch([editDirectory.scss + '*.scss', './_src/scss/*.scss'], gulp.series('css.compile', 'css.minify',  'browser.reload'));
  gulp.watch([editDirectory.js + '*.js'], gulp.series('js.minify', 'browser.reload'));
  gulp.watch([editDirectory.img + '*.png', editDirectory.img + '*.jpg', editDirectory.img + '*.svg'], gulp.series('img.minify', 'browser.reload'));
  done();
});

/*---------- default ----------*/
gulp.task('default', gulp.series('css.compile', 'css.minify', 'js.minify',
  gulp.parallel('files.watch', 'browser.sync'), function(done) {
    done();
  })
);