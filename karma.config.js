const path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        coverageReporter: {
            dir: 'tests/reports',
            reporters: [
                { type: 'html', subdir: 'coverage' },
                { type: 'lcovonly', subdir: '.' }
            ]
        },
        files: [
            'tests/unit/**/*.js'
        ],
        autoWatch: true,
        frameworks: [
            'jasmine'
        ],
        preprocessors: {
            'tests/**/*.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'coverage', 'html'],
        htmlReporter: {
            outputFile: 'tests/reports/unit-test/report.html',
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
                        include: /tests/,
                        exclude: /(bower_components|node_modules)/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true
                        }
                    },
                    {
                        test: /\.js?$/,
                        include: /src/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-istanbul',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ],
                loaders: [
                    {
                        test: /\.js$/,
                        include: path.resolve(__dirname, '../src'),
                        exclude: /(bower_components|node_modules)/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ]
            }
        }
    });
};
