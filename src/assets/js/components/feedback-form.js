/**
* Adds page and user details to hidden inputs on the feedback form
**/

function addHiddenInput (key, val) {
  var newHiddenInput = $('<input type="hidden"/>');
  newHiddenInput.attr('name', key);
  newHiddenInput.attr('value', val);
  $('#feedback-hidden-inputs').append(newHiddenInput);
}
function init (franchiseTitle) {
  addHiddenInput('franchise', franchiseTitle);
  addHiddenInput('page-title', $(document).find('title').text());
  addHiddenInput('page-url', window.location.href);
  addHiddenInput('page-referer', encodeURIComponent(document.referrer));
  addHiddenInput('rspUsrAgent', navigator.userAgent);
}
module.exports = {
  init: init
};
