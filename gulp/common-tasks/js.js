'use-strict';

module.exports = function (gulp, plugins, config, webpack, destFolder, type = 'build') {
  return function (cb) {
    let src = [
      `${config.basepath.src}/assets/_project/_blocks/qg-main.js`
    ].concat(config.build.excludes);
    let dest = {
      base: `${config.basepath.build}`,
      ext: `${config.versionName}/js`,
    };
    if (type === 'release') {
      dest.base = `${config.basepath.release}`; // ${destFolder}/${config.versionName}/js/
    }

    if (!Array.isArray(destFolder)) {
      destFolder = [destFolder];
    }

    return gulp.src(src)
      .pipe(webpack({
        output: {
          filename: 'qg-main.js',
        },
        devtool: 'source-map',
        module: {
          loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
              presets: ['es2015'],
            },
          }],
        },
      }))
      .pipe(plugins.if(typeof destFolder[0] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[0]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[1] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[1]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[2] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[2]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[3] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[3]}/${dest.ext}`)))
      .pipe(plugins.if(typeof destFolder[4] !== 'undefined', gulp.dest(`${dest.base}/${destFolder[4]}/${dest.ext}`)));
  };
};
