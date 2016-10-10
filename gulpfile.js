const gulp = require('gulp');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tscConfig = require('./tsconfig.json');

gulp.task('compile', function () {
  var tsProject = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
  return gulp
    .src(tscConfig.filesGlob)
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("app"))
});