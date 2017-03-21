module.exports = function (gulp, plugins, config) {
  return function () {
    config.projects.map((element) => {
      return gulp.src([
          `${config.basepath.src}template/assets/_project/js/main.js`
        ])
        .pipe(plugins.webpack({
          output: {
            filename: 'main.js'
          },
          devtool: 'source-map',
          module: {
            loaders: [{
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel',
              query: {
                presets: ['es2015']
              }
            }]
          }
        }))
        .pipe(gulp.dest(config.basepath.build + element + '/assets/' + config.version + '/js/'));
    });
  };
};
