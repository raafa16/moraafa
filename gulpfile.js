var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('start', function() {
    bs.init({
        server: {
            baseDir: "./app"
        }
    });
});