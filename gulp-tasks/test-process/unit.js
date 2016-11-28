module.exports = function (gulp, plugins, config, Server) {
    return (done) => {
        new Server({
        configFile: config.test.testConfigLoc(),
        singleRun: true
        }, done).start();
    };
};