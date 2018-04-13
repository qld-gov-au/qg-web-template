/**
* Adds page and user details to hidden inputs on the feedback form
**/

function sanitize (str) {
  if (!str) {
    return false;
  }
  return str.replace(/</g, '&lt;') // strip <
    .replace(/>/g, '&gt;') // strip >
    .replace(/\+/g, '&#43;') // strip +
    .replace(/\\/g, '&#92;') // strip \
    .replace(/\(/g, '&#40;') // strip (
    .replace(/\)/g, '&#41;') // strip )
    .replace(/{/g, '&#123;') // strip (
    .replace(/}/g, '&#124;'); // strip )
}

function addHiddenInput (key, val) {
  var newHiddenInput = $('<input type="hidden"/>');
  newHiddenInput.attr('name', key);
  newHiddenInput.attr('value', sanitize(val));
  $('#feedback-hidden-inputs').append(newHiddenInput);
}
function init (franchiseTitle) {
  addHiddenInput('franchise', location.pathname.split('/')[1]);
  addHiddenInput('page-title', $(document).find('title').text());
  addHiddenInput('page-url', window.location.href);
  addHiddenInput('page-referer', encodeURIComponent(document.referrer));
  addHiddenInput('rspUsrAgent', navigator.userAgent);
}

module.exports = { init: init };
