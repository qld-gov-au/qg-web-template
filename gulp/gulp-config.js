module.exports = {
    version: 'v3',
    phase: 'Alpha',
    basepath: {
        src: 'src/',
        build: 'build/',
        release: 'release/',
        static: 'release/static.qgov.net.au/',
        test: 'test/',
        swe: 'swe/',
        bowerVersion: 0,
        node_modules: 'node_modules/'
    },
    projects: ['swe'], // 'cue'
    franchise: ['www.qld.gov.au', 'tmr.com.au', 'test.com'],
    src: {
        assets: function () {
            return config.basepath.src + 'template/assets/';
        },
        examples: function () {
            return config.basepath.src + 'template/examples/';
        }
    },
    build: {
        assets: function () {
            return config.basepath.build;
        },
        examples: function () {
            return config.basepath.build;
        }
    },
    release: {
        assets: function () {
            return config.basepath.release + 'assets/';
        },
        static: function () {
            return config.basepath.release + 'static.qgov.net.au/assets/';
        },
        images: function () {
            return config.basepath.release + 'assets/' + config.version + '/images/';
        },
        lib: function () {
            return config.basepath.release + 'assets/' + config.version + '/lib/';
        },
        examples: function () {
            return config.basepath.release + 'examples/';
        },
        includes: function () {
            return config.basepath.release + 'assets/includes/';
        },
        js: function () {
            return config.basepath.release + 'assets/' + config.version + '/js/';
        },
        css: function () {
            return config.basepath.release + 'assets/' + config.version + '/css/';
        }
    },
    test: {
        e2eTestReport () {
            return config.basepath.test + 'reports/e2e/htmlReport.html';
        },
        unitTestReport () {
            return config.basepath.test + 'reports/unit-test/report.html';
        },
        lintReport () {
            return config.basepath.test + 'reports/eslint/report.html';
        },
        coverageReport () {
            return config.basepath.test + 'reports/coverage/index.html';
        },
        protractorConfig () {
            return 'tests/protractor.config.js';
        },
        karmaConfig () {
            return process.cwd() + '/karma.config.js';
        }
    },
};

