module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.basepath.build)
            .pipe(plugins.prompt.prompt([{
                    type: 'input',
                    name: 'first',
                    message: 'Have you updated bower.json version number? Reply in yes or no'
                    }],
                function (res) {
                    if ((res.first === 'yes')) {
                        plugins.shell.task([
                            process.chdir(config.basepath.build),
                            'git init',
                            //'git remote add origin https://github.com/qld-gov-au/glue-template-release.git',
                            'git fetch --all',
                            'git add --all',
                            'git commit -m ' + config.basepath.bowerVersion + '',
                            'git tag -a ' + config.basepath.bowerVersion + ' -m "' + config.basepath.bowerVersion + '"',
                            'git push --tags',
                            'git push -f origin master:glue-template-release-master'
                        ])();
                    } else {
                        console.log('Please correct the errors');
                    }
                }));
    };
};