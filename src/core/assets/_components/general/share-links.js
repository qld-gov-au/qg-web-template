function init () {
    var pageUrl = window.location.href;
    var links = $('.qg-share-link');
    var pageTitle = $(document).find('title').text();
    links.each(function (index, link) {
        link.href = link.href.replace('PAGE_TITLE', pageTitle);
        link.href = link.href.replace('PAGE_URL', encodeURIComponent(pageUrl));
    });
}
module.exports = {
    init: init
};
