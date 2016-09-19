module.exports = function (gulp, plugins, config, gulpConnect, gulpConnectSsi, argv ) {
    return function () {
        gulpConnect.server({
            root: 'build/'+argv.template,
            port: 8013,
            livereload: true,
            middleware: function(){
                return [gulpConnectSsi({
                    baseDir: __dirname + '/../../build/'+argv.template,
                    ext: '.html',
                    onlineEncoding : 'utf8',
                    localEncoding : 'utf8'
                })];
            }
        });
    };
};
