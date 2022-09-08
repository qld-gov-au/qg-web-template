const ghpages = require('gh-pages');

ghpages.publish('storybook-static', function (err) {
  console.log(err);
});
