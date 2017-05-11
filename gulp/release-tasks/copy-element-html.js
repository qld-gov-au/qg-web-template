'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    return config.outputList.map((element) => {
      let src = [
        `${config.basepath.build}/${config.output[element].src}/**/*.html`,
      ].concat(config.release.excludes);

      let dest = `${config.basepath.release}/${config.output[element].dest}/`;

      // Test if the element is set to deploy this component
      if (config.output[element].copyElement === true) {
        // Define regex
        let cdn = {
          regex: new RegExp('<!--#include.*virtual="/assets/includes/', 'g'),
          replacement: '<!--#include virtual="/assets/includes-cdn/',
        };
        let relSSI = {
          regex: new RegExp('<!--#include.*virtual="/assets/includes', 'g'),
          replacement: '<!--#include virtual="assets/includes',
        };
        let relLink = {
          regex: new RegExp('<link.*href="/assets/', 'g'),
          replacement: '<link href="assets/',
        };

        return gulp.src(src, { dot: true })
          .pipe(plugins.if(config.output[element].includesLocalToCdn === true, plugins.replace(cdn.regex, cdn.replacement)))
          .pipe(plugins.if(config.output[element].includesRel === true, plugins.replace(relSSI.regex, relSSI.replacement)))
          .pipe(plugins.if(config.output[element].includesRel === true, plugins.replace(relLink.regex, relLink.replacement)))
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(gulp.dest(dest));
      } else {
        return true;
      }
    });
  };
};
