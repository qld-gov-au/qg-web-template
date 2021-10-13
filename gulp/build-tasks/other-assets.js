// other assets -> images, external libraries and fonts
module.exports = function (gulp, plugins, config, es, dest) {
  return function (done) {
    // Images
    gulp.src(`${config.basepath.src}/assets/_project/images/**/*`).pipe(
      gulp.dest(`${config.basepath.build}/${dest}/${config.versionName}/latest/images/`),
    );
    // external Libraries
    gulp.src(`${config.basepath.src}/assets/_project/lib/**`).pipe(
      gulp.dest(`${config.basepath.build}/${dest}/${config.versionName}/latest/lib/`),
    );
    // Fonts
    gulp.src(`${config.basepath.node_modules}/bootstrap-sass/assets/fonts/**`).pipe(
      gulp.dest(`${config.basepath.build}/${dest}/${config.versionName}/latest/fonts`),
    );
    gulp.src(`${config.basepath.node_modules}/font-awesome/fonts/**`).pipe(
      gulp.dest(`${config.basepath.build}/${dest}/${config.versionName}/latest/fonts`),
    );
    gulp.src([`${config.basepath.src}/docs/**/*.js`, `${config.basepath.src}/docs/**/*.png`, `${config.basepath.src}/docs/**/*.css`, `${config.basepath.src}/docs/**/release-notes/**/*`])
      .pipe(plugins.if(dest === 'docs/assets', gulp.dest(`${config.basepath.build}/docs/`)));

    gulp.src(config.extLib.transferToBuild, { base: './node_modules' })
      .pipe(plugins.replace(/\/\/# sourceMappingURL=(.*)/g, ''))
      .pipe(gulp.dest(`${config.basepath.build}/${dest}/${config.versionName}/latest/lib/ext`));

    done();
  };
};
