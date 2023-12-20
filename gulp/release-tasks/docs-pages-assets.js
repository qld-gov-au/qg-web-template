'use strict';

module.exports = function (gulp, plugins, config, local = false, relpath = false) {
  return function (cb) {
    const src = [
      `${config.basepath.release}/docs/**/*.html`,
    ];

    const relLink = {
      regex: new RegExp('="/assets/', 'g'),
      replacement: '="assets/',
    };

    // Test if the element is set to deploy this component
    return gulp.src(src, { dot: true })
      .pipe(plugins.if(relpath === true, plugins.replace(relLink.regex, relLink.replacement)))
      .pipe(gulp.dest(`${config.basepath.release}/docs/`));
  };
};
