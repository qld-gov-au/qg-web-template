module.exports = {
    version: 'v3',
    basepath: {
        src: 'src/',
        build: 'build/',
        buildswe: 'build/swe/',
        release: 'release/',
        static: 'release/static.qgov.net.au/',
        test: 'test/',
        swe: 'swe/',
        bowerVersion: 0,
        node_modules: 'node_modules/'
    },
    projects: ['swe', 'cue'],
    franchise: ['www.qld.gov.au', 'tmr.com.au', 'test.com'],
    src: {
        assets: function () {
            return config.basepath.src + 'swe/assets/';
        },
        examples: function () {
            return config.basepath.src + 'swe/examples/';
        }
    },
    build: {
        assets: function () {
            return config.basepath.build;
        },
        examples: function () {
            return config.basepath.build + 'swe/examples/';
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
    inherit: {
        swe: {
            inheritAll: true,
            files: null // ['!**/nav-site/nav-site.html']
        },
        cue: {
            inheritAll: true,
            files: null
        },
        flux: {
            inheritAll: true,
            files: null
        },
        ice: {
            inheritAll: true,
            files: null
        }
    }
};

