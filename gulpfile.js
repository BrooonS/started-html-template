/**
 * Plugins
 */

// main plugins
const gulp         = require('gulp');
const gulpif       = require('gulp-if');
const browserSync  = require('browser-sync').create();
const del          = require('del');
const rename       = require('gulp-rename');
const notify       = require('gulp-notify');
// CSS plugins
const sass         = require('gulp-sass');
const minifyCSS    = require('gulp-clean-css');
const shorthand    = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');
// JS plugins
const minifyJS     = require('gulp-minify');
const babel        = require('gulp-babel');
// image plugins
const imagemin     = require('gulp-imagemin');
const pngquant     = require('imagemin-pngquant');

/**
 * Config
 */

// supported old browsers
const supported = true;
// what browsers
const browsers = [
  'ie >= 10',
  'Firefox >= 11',
  'Chrome >= 18',
  'Safari >= 6',
  'Opera >= 12.1',
];

// watching files
const watch = {
  html: 'src/*.html',
  js: 'src/js/**/*',
  sass: 'src/sass/**/*',
  img: 'src/img/**/*',
}

/**
 * Functions
 */

// SASS compilation to CSS
gulp.task('sass', () => {
  return gulp.src('src/sass/*.+(sass|scss)')
    .pipe(sass().on('error', notify.onError()))
    .pipe(shorthand())

    .pipe(gulpif(supported, autoprefixer({
      browsers: browsers,
      cascade: true
    })))

    // minify css
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))

    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// JS compilation
gulp.task('scripts', () => {
  return gulp.src('src/js/scripts.js')

    .pipe(gulpif(supported, babel({
      presets: ['es2015']
    })))

    // minify js
    .pipe(minifyJS({
      ext: {
        min: '.min.js'
      },
      noSource: true,
      preserveComments: 'some'
    }))

    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});

// image optimization
gulp.task('img', () => {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

// start server
gulp.task('server', ['sass', 'scripts'], () => {

  browserSync.init({
    notify: false,
    server: 'src',
    port: '5000'
  });

  gulp.watch(watch.html).on('change', browserSync.reload);
  gulp.watch(watch.js).on('change', browserSync.reload);
  gulp.watch(watch.sass, ['sass']).on('change', browserSync.reload);
  gulp.watch(watch.img).on('change', browserSync.reload);
});

// default task
gulp.task('default', ['server']);

// clean «dist» before build
gulp.task('clean', () => {
  return del.sync('dist');
});

// building
gulp.task('build', ['clean', 'sass', 'scripts', 'img'], () => {

  const buildHTML = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));

  const buildCSS = gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

  const buildJS = gulp.src(['src/js/**/*.js', '!src/js/scripts.js'])
    .pipe(gulp.dest('dist/js'));

  const buildFONTS = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

});
