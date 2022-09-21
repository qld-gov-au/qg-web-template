// storybook template -> html files only for use in squiz matrix as code snippet
module.exports = function (gulp, plugins, config, src, dest) {
  return function (done) {
    gulp
      .src(`${config.basepath.src}/stories/components/**/*.html`, { dot: true })
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.static}/assets/${config.versionName}/latest/stories/components/`));

    gulp
      .src(`${config.basepath.src}/../storybook-static/**/*`, { dot: true })
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.release}/storybook-static/`));

    done();
  };
};
