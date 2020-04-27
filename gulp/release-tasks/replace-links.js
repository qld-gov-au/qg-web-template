'use strict';

module.exports = function (gulp, plugins, es, config) {
  return function (cb) {
    return es.merge([
      gulp.src(`${config.basepath.release}/docs/*.html`)
        .pipe(plugins.replace(/\/assets\/v4\//g, 'https://test-static.qgov.net.au/assets/v4/'))
        .pipe(gulp.dest(`${config.basepath.release}/docs/`)),

      gulp.src(`${config.basepath.release}/docs/pagemodels/*.html`)
        .pipe(plugins.replace(/\/assets\/v4\//g, 'https://test-static.qgov.net.au/assets/v4/'))
        .pipe(gulp.dest(`${config.basepath.release}/docs/pagemodels/`)),
    ]);
  };
};
