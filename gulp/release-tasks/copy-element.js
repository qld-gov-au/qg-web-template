'use strict';

module.exports = function (gulp, plugins, config) {
  return function () {
    return config.outputList.map((element) => {
      let src = [`${config.basepath.build}/${config.output[element].src}/**`];
      let dest = `${config.basepath.release}/${config.output[element].dest}/`;

      // if (typeof config.output[element].copyElement === 'string') {
      //   let elementSrc = config.output[element].src;
      //   src = [`${config.basepath.build}/${elementSrc}/**`];
      // } else {
      //   src = [`${config.basepath.build}/${element}/**/*`];
      // }

      src.concat(config.release.excludes);

      // Test if the element is set to deploy this component
      if (config.output[element].copyElement === true) {
        // Define regex
        let cdn = {
          regex: new RegExp('<!--#include.*virtual="/assets/includes/', 'g'),
          replacement: '<!--#include virtual="/assets/includes-cdn/',
        };
        let relLink = {
          regex: new RegExp('<!--#include.*virtual="/assets/includes', 'g'),
          replacement: '<!--#include virtual="assets/includes',
        };

        return gulp.src(src, { dot: true })
          .pipe(plugins.if(config.output[element].includesLocalToCdn === true, plugins.replace(cdn.regex, cdn.replacement)))
          .pipe(plugins.if(config.output[element].includesRel === true, plugins.replace(relLink.regex, relLink.replacement)))
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(gulp.dest(dest));

        /*
        // Depricated code
        if (config.output[element].localToCdn === true) {
          let regex = new RegExp('<!--#include.*virtual="/assets/includes/', 'g');
          return gulp.src(src, { dot: true })
            .pipe(plugins.replace(regex, '<!--#include virtual="/assets/includes-cdn/'))
            .pipe(plugins.include({ hardFail: true }))
            .on('error', console.log)
            .pipe(gulp.dest(dest));
        } else {
          return gulp.src(src, { dot: true })
            .pipe(plugins.include({ hardFail: true }))
            .on('error', console.log)
            .pipe(gulp.dest(dest));
        }
        */
      } else {
        return true;
      }
    });
  };
};
