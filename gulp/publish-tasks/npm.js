module.exports = function (gulp, plugins, config) {
  return function () {
    gulp.src(config.basepath.release)
    .pipe(plugins.prompt.prompt([{
        type: 'input',
        name: 'first',
        message: 'Have you updated the version number? Reply in yes or no'
      }],
      function (res) {
        if ((res.first === 'yes')) {
          plugins.shell.task([
            process.chdir(config.basepath.release),
            'git init',
            //'git remote add origin https://github.com/qld-gov-au/glue-template-release.git',
            'git fetch --all',
            'git add --all',
            'git commit -m ' + config.version + '',
            'git tag -a ' + config.version + ' -m "' + config.version + '"',
            'git push --tags',
            'git push -f origin master:qg-web-template-release-master'
          ])();
        } else {
          console.log('Please correct the errors');
        }
      }
    ));
  };
};
