module.exports = function (gulp, plugins, config, es, dest) {
  return function (cb) {
    config.projects.map(function (element) {
      return es.merge([
        // Images
        gulp.src(`${config.basepath.src}/${dest}/_project/images/**/*`).pipe(
          gulp.dest(`${config.basepath.build}/${dest}/${config.versionName}/images/`)
        ),
        // Libraries
        gulp.src(`${config.basepath.src}/${dest}/_project/lib/**`).pipe(
          gulp.dest(`${config.basepath.build}/${dest}/${config.versionName}/lib/`)
        ),
        // Fonts
        gulp.src(`${config.basepath.node_modules}/bootstrap-sass/assets/fonts/**`).pipe(
          gulp.dest(`${config.basepath.build}/${dest}/v3/fonts`)
        ),
        gulp.src(`${config.basepath.node_modules}/font-awesome/fonts/**`).pipe(
          gulp.dest(`${config.basepath.build}/${dest}/v3/fonts`)
        ),
      ])
      .on('end', cb);
    });
  };
};
