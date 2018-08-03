(function () {
  $('.qg-index-item').each(function () {
    if ($(this).find('img').length <= 0) {
      $(this).addClass('content-only');
    }
  });
})();
