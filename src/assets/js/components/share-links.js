function init () {
  var links = $('.qg-share-link');
  var pageTitle = $(document).find('title').text();
  links.each(function (index, link) {
    link.href = link.href.replace('PAGE_TITLE', pageTitle);
  });
}
module.exports = {
  init: init
};
