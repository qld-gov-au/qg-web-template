/* ========================================================================
* Accessibility helpers
* ======================================================================== */

'use strict';

function init () {
  var $target = $('a[target=_blank]');

  if ($('body').attr('data-qg-accessibility') !== false) {
    if (!$target.hasClass('qg-accessibility-off')) {
      if ($target.attr('href') !== undefined) {
        if ($.contains('.qg-blank-notice', $target) === false) {
          $target.append(' <span class="qg-blank-notice sr-only">(Opens in new window)</span> ');
        }
        if ($target.attr('title') === undefined) {
          $target.attr('title', 'Opens in new window');
        }
      }
    }
  }
}

module.exports = { init: init };
