var gulp = require('gulp'),
    karma_server = require('karma').Server;

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('tests', function (done) {
    new karma_server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('tdd', function (done) {
    new karma_server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});