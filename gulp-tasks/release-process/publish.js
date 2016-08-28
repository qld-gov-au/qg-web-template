module.exports = function (gulp, plugins, config, argv) {
    return function () {
        plugins.shell.task([
            process.chdir(config.basepath.build+config.basepath.swe),
            'git init',
            // 'git remote add origin https://github.com/qld-gov-au/glue-swe-template.git',
            'git fetch --all',
            'git add --all',
            'git commit -m '+argv.version+'',
            'git tag -a '+argv.version+' -m "'+argv.version+'"',
            'git push --tags',
            'git push -f origin master:swe-master'
        ])()
    };
};