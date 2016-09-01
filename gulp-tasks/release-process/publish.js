module.exports = function (gulp, plugins, config, argv) {
    return function () {
        gulp.src(config.basepath.build + config.basepath.bo)
            .pipe(plugins.prompt.prompt([{
                    type: 'input',
                    name: 'first',
                    message: 'Have you updated bower.json version number? Reply in yes or no'
                    },
                    {
                        type: 'input',
                        name: 'second',
                        message: 'Please type yes to confirm this bower package update?'
                    }],
                function (res) {
                    if ((res.first == 'yes') && (res.second == 'yes')) {
                        plugins.shell.task([
                            process.chdir(config.basepath.build+config.basepath.swe),
                            'git init',
                            // 'git remote add origin https://github.com/qld-gov-au/glue-swe-template.git',
                            'git fetch --all',
                            'git add --all',
                            'git commit -m '+config.basepath.bowerVersion+'',
                            'git tag -a '+config.basepath.bowerVersion+' -m "'+config.basepath.bowerVersion+'"',
                            'git push --tags',
                            'git push -f origin master:swe-master'
                        ])()
                    }
                    else {
                        console.log("Please correct the errors");
                    }
                }));
    };
};