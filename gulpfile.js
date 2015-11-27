var gulp = require('gulp')
var plugins = require('gulp-load-plugins')({
  scope: ['devDependencies'],
  replaceString: /^gulp(-|\.)/,
  camelize: true,
  lazy: false,
  rename: {}
})

plugins.browserify = require('browserify')
plugins.partialify = require('partialify')
plugins.del = require('del')
plugins.runSequence = require('run-sequence')
plugins.source = require('vinyl-source-stream')
plugins.browsersync = require('browser-sync')
plugins.history = require('connect-history-api-fallback')

var paths = require('./gulppaths.json')
paths.browsersync.server.middleware = [ plugins.history() ]

gulp.task('reload-js', ['browserify'], plugins.browsersync.reload)
gulp.task('reload-less', ['less'], plugins.browsersync.reload)
gulp.task('reload-files', ['copy'], plugins.browsersync.reload)

gulp.task('watch', function (cb) {
  gulp.watch(paths.watch.js, ['reload-js'])
  gulp.watch(paths.watch.less, ['reload-less'])
  gulp.watch(paths.watch.copy, ['reload-files'])
  cb()
})
gulp.task('browserify', function (cb) {
  return plugins.browserify(paths.src.js.entry)
    .transform(plugins.partialify)
    .bundle()
    .on('error', function (err) {
      // print the error (can replace with gulp-util)
      console.error(err.message)
      // end this stream
      this.emit('end')
    })
    .pipe(plugins.source(paths.dest.js.name))
    .pipe(gulp.dest(paths.dest.js.path))
// .pipe(plugins.size()) // Errors out saying "Streaming not supported"
})
gulp.task('less', function (cb) {
  return gulp.src(paths.src.less.entry)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less())
    .pipe(plugins.autoprefixer('last 2 versions'))
    .pipe(plugins.rename(paths.dest.css.name))
    .pipe(plugins.sourcemaps.write('maps'))
    .pipe(gulp.dest(paths.dest.css.path))
    .pipe(plugins.size())
})
gulp.task('copy', function (cb) {
  Object.keys(paths.src.copy).forEach(function (key) {
    gulp.src(paths.src.copy[key])
      .pipe(gulp.dest(paths.dest.copy[key]))
  })
  cb()
})
gulp.task('default', function (cb) {
  return plugins.runSequence(
    // 'clean',
    'build', [
      'watch',
      'server'
    ],
    cb)
})
gulp.task('build', function (cb) {
  return plugins.runSequence(
    [ 'browserify', 'less' ],
    'copy'
    , cb)
})

gulp.task('server', function (cb) {
  return plugins.browsersync(paths.browsersync)
})
