module.exports = function (gulp, plugins, config, gulpConnect, gulpConnectSsi, argv) {
    return function () {
        config.projects.map(function (element, index) {
            gulpConnect.server({
                root: 'build/' + element,
                host: 'localhost',
                name: element.toUpperCase(),
                port: 5000 + index,
                livereload: true,
                middleware: function () {
                    return [gulpConnectSsi({
                        baseDir: __dirname + '/../../build/' + element,
                        ext: '.html',
                        onlineEncoding: 'utf8',
                        localEncoding: 'utf8'
                    })];
                }
            });
        });
    };
};
