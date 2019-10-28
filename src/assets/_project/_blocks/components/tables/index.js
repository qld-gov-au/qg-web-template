(function ($) {
  'use strict';
  // tables scrollable based on width
  function tablesscrollable () {
    var $contentTable = $('#qg-primary-content table tbody');
    if ($contentTable.width() > $('#qg-primary-content').width()) {
      $contentTable.wrap(
        '<div class="scrollable"><div class="inner"></div></div>'
      );
    }
  }
  tablesscrollable();
}(jQuery));
