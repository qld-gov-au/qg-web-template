(function ($) {
  $('.qg-share-link').each(function () {
    const from = window.location.href;
    const domain = window.location.hostname;
    if ($(this).hasClass('qg-share-facebook')) {
      $(this).attr('href', `http://www.facebook.com/share.php?u=${from}`);
    } else if ($(this).hasClass('qg-share-twitter')) {
      $(this).attr('href', `http://twitter.com/share?url=${from}`);
    } else if ($(this).hasClass('qg-share-linkedin')) {
      $(this).attr('href', `http://www.linkedin.com/shareArticle?mini=true&url=${from}&source=${domain}`);
    }
  });
})(jQuery);
