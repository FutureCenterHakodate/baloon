var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var webserver = require('gulp-webserver');
var open = require('gulp-open');
var wait = require('gulp-wait');
var moduleImporter = require('node-sass-package-importer');

gulp.task('pug', function(){
  gulp.src(['./src/*.pug', './src/**/*.pug', '!./src/**/_*.pug'])
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./dest'));
});

gulp.task('img', function(){
  gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dest/img'));
});

gulp.task('sass', function(){
  gulp.src('./src/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
      importer: moduleImporter()
    })
    .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('ts', function(){
  gulp.src('./src/ts/**/*.ts')
    .pipe(plumber())
    .pipe(typescript({out: 'main.js', removeComments: true}))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'));
});

gulp.task('webserver', function(){
  gulp.src('./dest')
    .pipe(
      webserver({
        host: 'localhost',
        livereload: true
      })
    );
});

gulp.task('open', ['pug', 'webserver'], function(){
  gulp.src('')
    .pipe(wait(1500))
    .pipe(open({uri: 'http://localhost:8000'}));
});

gulp.task('watch', function(){
  gulp.watch(['./src/**/*.pug', '!./src/**/_*.pug'],['pug']);
  gulp.watch('./src/ts/**/*.ts',['ts']);
  gulp.watch('./src/sass/**/*',['sass']);
  gulp.watch('./src/img/**/*',['img']);
});

gulp.task('default',['pug', 'img', 'ts', 'sass', 'watch', 'webserver', 'open']);
