module.exports = function (gulp, plugins, config, argv) {
  return function () {
    let releaseTypes = ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease'];
    return gulp.src(`${config.basepath.release}/**/*`, { dot: true })
      .pipe(gulp.dest(`${config.publish.npmDir}`))
      .pipe(plugins.prompt.prompt([{
          type: 'input',
          name: 'confirmation',
          message: 'Please confirm that you want to publish this package on npm? (yes or no)',
        },{
          type: 'input',
          name: 'logged',
          message: 'Are you logged into the NPM as the correct user? (yes or no)',
        }, {
          type: 'input',
          name: 'releaseType',
          message: 'Select a release type? Ex ' + releaseTypes,
        },],
        function (res) {
          let checkInput = releaseTypes.filter(e => e.match(new RegExp('\\b' + res.releaseType + '\\b')));
          if ((res.confirmation === 'yes') && (res.logged === 'yes') && checkInput.length > 0) {
            plugins.shell.task([
              'echo release type "' + res.releaseType + '"',
              'echo release version "' + config.publish.version + '"',
              process.chdir(config.publish.npmDir),
              'pwd',
              'git remote set-url origin https://github.com/AsifAmin/testnpmsib.git',
              'git add --all',
              'git commit -m "' + argv.msg + '"',
              'npm version ' + res.releaseType,
              'git pull -X ours',
              'git push origin master --tags',
              'npm publish'
            ])();
          } else {
            console.log('Please make sure you are logged into the NPM and you have selected a release type');
          }
        }));
  };
};
