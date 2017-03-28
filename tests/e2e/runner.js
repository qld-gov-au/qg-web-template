const Nightwatch = require('nightwatch');
const browserstack = require('browserstack-local');
let bsLocal = new browserstack.Local();

try {
    process.mainModule.filename = './node_modules/nightwatch/bin/nightwatch';
    bsLocal.start({ 'key': process.env.BROWSERSTACK_ACCESS_KEY, 'proxyHost': process.env.PROXYHOST, 'proxyPort': process.env.PROXYPORT, 'force': 'true' }, function (error) {
        if (error) throw error;
        Nightwatch.cli(function (argv) {
            Nightwatch.CliRunner(argv)
                .setup(null, function () {
                    bsLocal.stop(function () { });
                })
                .runTests(function () {
                    bsLocal.stop(function () { });
                });
        });
    });
} catch (ex) {
    console.log('There was an error while starting the test runner:\n\n');
    process.stderr.write(ex.stack + '\n');
    process.exit(2);
}