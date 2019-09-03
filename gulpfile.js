var gulp = require('gulp'),
  tsc = require('gulp-typescript'),
  clean = require('gulp-clean');
sourcemaps = require('gulp-sourcemaps');

var paths = {
  tsc: {
    src: [
      'src/app/**/*.ts'
    ],
    dest: 'dist/out-tsc'
  },
  tailored: 'dist/tailored'
};

// Clean
gulp.task('clean', function () {
  return gulp.src(paths.tsc.dest, {read: false, allowEmpty: true})
    .pipe(clean());
});

//Build
gulp.task('build', function () {
  return gulp
    .src(paths.tsc.src)
    .pipe(sourcemaps.init())
    .pipe(tsc({
      sourceMap: true,
      declaration: true,
      declarationMap: true,
      module: 'commonjs',
      moduleResolution: 'node',
      jsx: 'preserve',
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      removeComments: true,
      isolatedModules: false,
      allowJs: false,
      target: 'es5',
      typeRoots: [
        'node_modules/@types'
      ],
      lib: [
        'es2017',
        'dom'
      ],
      skipLibCheck: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.tsc.dest));
});

//Rebuild
gulp.task('rebuild', gulp.series('clean', 'build', function (done) {
  // task 1 code here
  done();
}));

gulp.task('copy-metadata', function (done) {
  gulp.src([
    paths.tsc.dest + '/**/*.base.*']).pipe(gulp.dest(paths.tailored + '/src/app'));
  done();
});

gulp.task('copy-sass-base', function (done) {
  gulp.src(['./**/*.base.scss'], {base: './'}).pipe(gulp.dest(paths.tailored));
  done();
});

gulp.task('copy-sources', function (done) {
  gulp.src([
    './**/*.css',
    './**/*.scss',
    './**/*.html',
    './**/*.json',
    './**/*.js',
    './**/*.ts',
    // images
    './**/*.+(jpg|svg|png)',
    // fonts
    './**/*.+(eot|ttf|woff|woff2)',
    // exclude
    '!./node_modules/**/*.*',
    '!./typings/**/*.*',
    '!./**/*.base.*',
    '!./dist/**/*.*',
    '!./Framework/**/*.*',
    '!./Tailored/**/*.*'
  ], {base: './'}).pipe(gulp.dest(paths.tailored));
  done();
});

// Clean tailored
gulp.task('clean-tailored', function () {
  return gulp.src(paths.tailored, {read: false, allowEmpty: true})
    .pipe(clean());
});

//Create tailored project
gulp.task('tailored', gulp.series('clean-tailored', 'copy-sources', 'copy-sass-base', 'copy-metadata', function (done) {
  done();
}));


