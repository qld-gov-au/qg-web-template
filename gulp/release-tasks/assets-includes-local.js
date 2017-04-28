'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    config.outputList.map(function (element, index, array) {
      let src = [
        `${config.basepath.build}/assets/includes-local/**/*`,
      ].concat(config.release.excludes);

      let relLink = {
        regex: new RegExp('/assets/', 'g'),
        replacement: 'assets/',
      };
      console.log('> ', element, index);

      // Test if the element is set to deploy this component
      //if (config.output[element].assetsIncludes === true) {
        console.log('ey?', `${config.basepath.release}/${config.output[element].dest}/assets/includes-local/`);
        let temp = gulp.src(src, { dot: true })
          .pipe(plugins.include({ hardFail: true }))
          .on('error', console.log)
          .pipe(plugins.if(config.output[element].assetsRel === true, plugins.replace(relLink.regex, relLink.replacement)))
          .pipe(gulp.dest(`${config.basepath.release}/${config.output[element].dest}/assets/includes-local/`), cb);
        console.log('final');
      //} else {
      //  console.log('wat?');
      //  return cb;
      //}
    });
  };
};
