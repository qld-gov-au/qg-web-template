// module.exports = function (gulp, plugins, config, protractor) {
//     return () => {
//         gulp.src(['tests/e2e/**/*-spec.js'])
//             .pipe(protractor({
//                 configFile: config.test.protractorConfig(),
//                 args: ['--baseUrl', 'http://127.0.0.1:8000']
//             }))
//             .on('error', function (e) { throw e; });
//     };
// };