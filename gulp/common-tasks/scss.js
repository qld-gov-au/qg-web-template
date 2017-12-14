'use-strict';

// module.exports = function (gulp, plugins, config, destFolder = 'assets', addSrc, type = 'build') {
module.exports = function (gulp, plugins, config, destFolder = 'assets', addSrc) {
  let extLibCssTarget = config.extLib.css.map(function (s) { return `${config.basepath.src}/assets/_project/lib/ext/` + s + '.css'; });
  return function (cb) {
    let src = [
      `${config.basepath.src}/assets/_project/_blocks/*.scss`,
      '!** /_*.scss',
    ];
    //.concat(config.build.excludes); remove excludes
    let dest = {
      base: `${config.basepath.build}`,
      ext: `${config.versionName}/latest/css`,
    };
    // if (type === 'release') {
    //   dest.base = `${config.basepath.release}`; // ${destFolder}/${config.versionName}/js/
    // }

    if (!Array.isArray(destFolder)) {
      destFolder = [destFolder];
    }

    return gulp.src(src)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.plumber())
      .pipe(plugins.sass({
        includePaths: [config.basepath.src],
      }))
      .on('error', plugins.sass.logError)
      .pipe(addSrc.append(extLibCssTarget))
      .pipe(plugins.autoprefixer({
        browsers: plugins.supportedBrowser,
        cascade: false,
      }))
      .pipe(plugins.sourcemaps.write('.', {
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
