'use-strict';
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('node-sass');

module.exports = function (gulp, plugins, config, destFolder = 'assets', addSrc) {
  const extLibCssTarget = config.extLib.css.map(function (s) { return `${config.basepath.src}/assets/_project/lib/ext/` + s; });
  return function (cb) {
    const src = [
      `${config.basepath.src}/assets/_project/_blocks/*.scss`,
      '!** /_*.scss',
    ];
    const dest = {
      base: `${config.basepath.build}`,
      ext: `${config.versionName}/latest/css`,
    };
    if (!Array.isArray(destFolder)) {
      destFolder = [destFolder];
    }
    return gulp.src(src)
      .pipe(sass({
        includePaths: [
          '../../../../node_modules/',
        ],
      }))
      .pipe(sourcemaps.init())
      .pipe(plugins.plumber())
      .pipe(sass({
        includePaths: [config.basepath.src],
      }))
      .on('error', sass.logError)
      .pipe(addSrc.append(extLibCssTarget))
      .pipe(plugins.autoprefixer({
        browsers: plugins.supportedBrowser,
        cascade: false,
      }))
      .pipe(sourcemaps.write('.', {
        sourceRoot: config.basepath.src,
      }))
      // .pipe(plugins.if(type === 'release', plugins.cleanCss()))
      .pipe(plugins.if(typeof destFolder[0] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[0]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[1] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[1]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[2] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[2]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[3] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[3]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[4] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[4]}/${dest.ext}`)));
  };
};
