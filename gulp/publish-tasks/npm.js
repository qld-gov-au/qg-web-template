'use strict';

const gulp = require('gulp');
const npm = require('npm');
const prompt = require('gulp-prompt');
const path = require('path');
const fs = require('fs');
const config = require('../gulp-config');

module.exports = (cb) => {
  const pjson = require(path.resolve(config.webTemplateRepo.folder, 'package.json'));

  const uri = 'http://registry.npmjs.org/';
  const username = 'qld-gov-au-npm';
  const email = 'oss.applications@dsiti.qld.gov.au';
  const pkgId = pjson.name + '-' + pjson.version + '.tgz';

  let auth;
  process.chdir(path.resolve(config.webTemplateRepo.folder));
  return npm.load(null, (err) => {
    if (err) throw err;

    return gulp.src('package.json')
      .pipe(prompt.prompt({
        type: 'password',
        name: 'password',
        message: 'Please enter \'' + username + '\' npm account password',
      }, (res) => {
        auth = {
          username: username,
          password: res.password,
          email: email,
          alwaysAuth: true,
        };

        npm.registry.adduser(uri, {auth: auth}, function (err, data, raw, res) {
          if (err) throw err;
          console.log('logged in as ' + auth.username);

          npm.commands.pack([], function (err) {
            if (err) {
              throw Error(err);
            }
            console.log('packing files');

            const publishParams = {
              metadata: JSON.parse(JSON.stringify(pjson)),
              access: 'public',
              body: fs.createReadStream(path.resolve(pkgId)),
              auth: auth,
            };
            npm.registry.publish(uri, publishParams, function (err, res) {
              if (err) {
                throw Error(err);
              }
              console.log('Publish successfull: ' + JSON.stringify(res));
              cb();
              return true;
            });
          });
        });
      }));
  });
};
