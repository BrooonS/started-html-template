// plugins
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const minify       = require('gulp-minify');
const cssnano      = require('gulp-cssnano');
const rename       = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const shorthand    = require('gulp-shorthand');
const babel        = require('gulp-babel');
const browserSync  = require('browser-sync').create();
const del          = require('del');
const imagemin     = require('gulp-imagemin');
const pngquant     = require('imagemin-pngquant');

// watching files
const watch = {
  html: 'src/*.html',
  js: 'src/js/**/*',
  sass: 'src/sass/**/*',
  img: 'src/img/**/*',
}

// sass compilation to css and minify
gulp.task('sass', () => {
  return gulp.src('src/sass/*.(sass|scss)')
    .pipe(sass())
    // uncomment for support old browsers
    // .pipe(autoprefixer(
    //   ['ie >= 10', 'Firefox >= 11', 'Chrome >= 18', 'Safari >= 6', 'Opera >= 12.1'],
    //   { cascade: true }
    // ))
    .pipe(shorthand())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// minify js
gulp.task('scripts', () => {
  return gulp.src('src/js/scripts.js')
    // uncomment for support old browsers
    // .pipe(babel({
    //   presets: ['es2015']
    // }))
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
      noSource: true,
      preserveComments: 'some'
    }))
    .pipe(gulp.dest('dist/js'));
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
gulp.task('server', ['sass'], () => {

  browserSync.init({
    server: "src",
    port: '5000'
  });

  gulp.watch(watch.html).on('change', browserSync.reload);
  gulp.watch(watch.js).on('change', browserSync.reload);
  gulp.watch(watch.sass, ['sass']).on('change', browserSync.reload);
  gulp.watch(watch.img).on('change', browserSync.reload);
});

// main task
gulp.task('default', ['server']);

// clean «dist» before build
gulp.task('clean', () => {
  return del.sync('dist');
});

// building
gulp.task('build', ['clean', 'sass', 'scripts', 'img'], () => {

  const buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));

  const buildCss = gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

  const buildScripts = gulp.src(['src/js/**/*.js', '!src/js/scripts.js'])
    .pipe(gulp.dest('dist/js'));

  const buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

});
