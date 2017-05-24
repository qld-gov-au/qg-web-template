'use-strict';

module.exports = function (gulp, plugins, config, webpack, destFolder, type = 'build') {
  return function (cb) {
    config.projects.map((element) => {
      let src = `${config.basepath.src}/assets/_project/_blocks/qg-main.js`;
      let dest = `${config.basepath.build}/${destFolder}/${config.versionName}/js/`;
      if(type === 'release') {
        dest = `${config.basepath.release}/${destFolder}/${config.versionName}/js/`;
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
        .pipe(gulp.dest(dest))
        .on('end', cb);
    });
  };
};
