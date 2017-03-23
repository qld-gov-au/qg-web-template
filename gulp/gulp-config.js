'use strict';

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
    projects: ['core'], // 'cue'
    outputs: {
        build: ['build'],
        release: ['core', 'template-local', 'template-cdn'],
    },
    src: {
        get assets () {
            return this._parent.basepath.src + 'assets/';
        },
        /*
        get templates () {
            return this._parent.basepath.src + 'templates/';
        },
        get documentation () {
            return this._parent.basepath.src + 'documentation/';
        },
        */
        get html () {
            return [
              `${config.basepath.src}**/*.html`,
              '!**/_project/**/*',
            ];
        },
        get scss () {
            return [
                `${this._parent.src.assets}_project/scss/*.scss`,
                '!** /_*.scss'
            ];
            
        },
        get excludes () {
            return [
                '!**/_DELETE.*/**/*',
                '!**/_old*/**/*',
                '!**/_old*',
            ];
        },
    },
    build: {
        get assets () {
            return this._parent.basepath.build;
        },
        get coreAssets() {
            return `${this._parent.basepath.build}assets/${this._parent.version}/`;
        },
        get includes () {
            return `${this._parent.basepath.build}assets/includes/`;
        },
        get templates () {
            return `${this._parent.basepath.build}templates/`;
        },
        get documentation () {
            return `${this._parent.basepath.build}documentation/`;
        },
    },
    release: {
        core: {
            name: 'core',
            resources: {
                get coreAssets () { return this._parent.build.coreAssets; },
                get includes () { return this._parent.build.includes; },
            },
        },
        templateLocal: {
            name: 'template-local',
            resources: {
                get coreAssets () { return this._parent.build.coreAssets; },
                get includes () { return this._parent.build.includes; },
                get templates () { return this._parent.build.templates; },
            },
        },
        templateCDN: {
            name: 'template-cdn',
            resources: {
                get includes () { return this._parent.build.includes; },
                get templates () { return this._parent.build.templates; },
            },
        },
        documentation: {
            name: 'documentation',
            resources: {
                get templates () { return this._parent.build.templates(); },
            },
        }
    },
    test: {
        get e2eTestReport () {
            return this._parent.basepath.test + 'reports/e2e/htmlReport.html';
        },
        get unitTestReport () {
            return this._parent.basepath.test + 'reports/unit-test/report.html';
        },
        get lintReport () {
            return this._parent.basepath.test + 'reports/eslint/report.html';
        },
        get coverageReport () {
            return this._parent.basepath.test + 'reports/coverage/index.html';
        },
        get protractorConfig () {
            return 'tests/protractor.config.js';
        },
        get karmaConfig () {
            return process.cwd() + '/karma.config.js';
        }
    },
    init () {
        for (var value in this) {
            if(typeof this[value] === "object") {
                this[value]._parent = this;
            }
        }
        delete this.init;
        return this;
    }
}.init();

