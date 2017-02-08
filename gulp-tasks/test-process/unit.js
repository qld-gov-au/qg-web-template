module.exports = function (gulp, plugins, config, Server) {
    return (done) => {
        new Server({
            configFile: config.test.karmaConfig(),
            singleRun: true
        }, done).start();
    };
};