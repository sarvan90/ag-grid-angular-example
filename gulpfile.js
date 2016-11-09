var gulp = require('gulp');
var SystemBuilder = require('systemjs-builder');

gulp.task('demo-bundle', function () {
    var builder = new SystemBuilder();

    builder.loadConfig('./systemjs.config.js')
        .then(function () {
            // return builder.buildStatic('lib/app/boot.js', './bundle.js', {
            return builder.buildStatic('app/boot.js', './bundle.js', {
                encodeNames: false,
                mangle: false,
                rollup: true
            });
        })
});