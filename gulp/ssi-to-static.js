'use strict';

// Node.js task to convert SSI includes to inline html
const SSI  = require('node-ssi');
const fs = require('fs');

/*
   * This function loops through a directory recursively to get all the files and filter those to list Html files.
   * @dir {string} directory to list all the files
   * @files_  {array} files list accumulated recursively
*/
const getFiles = function (dir, files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      if (name && /\.html$/.test(name)) {
        files_.push(name);
      }
    }
  }
  return files_;
};

module.exports = function (includeSrc, src, dest, exclude) {
  // const path = require('path');
  const ssi    = new SSI({
    encoding: 'utf-8',
    baseDir: includeSrc, // Source of includes
  });

  const filesList = getFiles(src);
  filesList.forEach(function (file) {
    ssi.compileFile(file, function (err, content) {
      if (err) {
        console.error(err);
        return;
      }
      fs.writeFile(file, content, function (err) {
        if (err) {
          console.error(err);
        } else {
          // console.log(buildFile + ' - Done');
        }
      });
    });
  });
};
