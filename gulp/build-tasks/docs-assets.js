'use strict';

// module.exports = function (gulp, plugins, config, es) {
//   return function (cb) {
//     config.projects.map(function (element) {
//       const incTarget = [
//         `${config.basepath.src}/docs/**/*.*`,
//       ].concat(config.build.excludes);

//       const v3Target = [
//         `${config.basepath.build}/assets/${config.versionName}/**/*.*`,
//       ].concat(config.build.excludes);

//       return es.merge([
//         // Docs includes
//         gulp.src(incTarget).pipe(
//           gulp.dest(config.basepath.build + '/docs/')
//         ),
//         // Docs V3
//         gulp.src(v3Target).pipe(
//           gulp.dest(config.basepath.build + '/docs/assets/' + config.versionName )
//         ),
//       ])
//       .on('end', cb);
//     });
//   };
// };


module.exports = function (gulp, plugins, config) {
  return function (cb) {
    const target = [
      `${config.basepath.build}/assets/${config.versionName}/**/*.*`,
    ].concat(config.build.excludes);

    return gulp.src(target, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}/docs/assets/${config.versionName}/`))
  };
};