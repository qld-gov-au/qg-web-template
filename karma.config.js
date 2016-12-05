var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.' },
      ],
    },
    files: [
      'test/**/*.js'
    ],
    autoWatch: true,
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
    },
    reporters: ['progress', 'coverage' , 'html'],
    htmlReporter: {
      outputFile: 'test/unit-test-report/report.html',
      pageTitle: 'Component Unit Tests',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /-test\.js$/,
            include: /test/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
        ],
        loaders: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
    },
  });
};
