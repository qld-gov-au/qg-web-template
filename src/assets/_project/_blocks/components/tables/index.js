(function ($) {
  'use strict';
  function onPrint (callback) {
    window.matchMedia('print').addListener((query) => (query.matches ? callback() : null));
    window.addEventListener('beforeprint', () => callback());
  }
  // tables scrollable based on width
  function tablesscrollable () {
    var $contentTable = $('#qg-primary-content table');
    if ($contentTable.width() > $('#qg-primary-content').width()) {
      $contentTable.wrap('<div class="scrollable"><div class="inner"></div></div>');
    }
  }
  tablesscrollable();
  if ($('.scrollable').length > 0) {
    $('.scrollable').addClass('scrollable-table');
    onPrint(() => {
      $('.scrollable-table').removeClass('scrollable');
    });
    window.onafterprint = function (e) {
      setTimeout(function () {
        $('.scrollable-table').addClass('scrollable');
      }, 100);
    };
  }
})(jQuery);
