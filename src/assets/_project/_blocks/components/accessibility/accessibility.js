/* ========================================================================
* Accessibility helpers
* ======================================================================== */

'use strict';

function opensInNewWindow () {
  var $target = $('a[target=_blank]');

  if (!$target.hasClass('qg-accessibility-off') && // Legacy
    $target.attr('data-access-extlink') !== false && // Legacy
    $target.attr('data-access-new-window') !== false &&
    $target.attr('href') !== undefined) {
    if ($.contains('.qg-blank-notice', $target) === false) {
      $target.append(' <span class="qg-blank-notice sr-only">(Opens in new window)</span> ');
    }
    if ($target.attr('title') === undefined) {
      $target.attr('title', 'Opens in new window');
    }
  }
}

function addCorrectIncorrect () {
  let ext = ':not(:has(.qg-blank-notice))';
  let $correct = $(`.qg-correct${ext}, table.qg-correct-incorrect td:nth-child(odd)${ext}`);
  let $incorrect = $(`.qg-incorrect${ext}, table.qg-correct-incorrect td:nth-child(even)${ext}`);

  $correct.prepend('<span class="qg-blank-notice sr-only">Correct.</span> ');
  $incorrect.prepend('<span class="qg-blank-notice sr-only">Incorrect.</span> ');
}

function init () {
  if ($('body').attr('data-qg-accessibility') !== false) {
    opensInNewWindow();
    addCorrectIncorrect();
  }
}

module.exports = { init: init };

