// this function checks date input field is supported in a browser or not
function browserSupportsDateInput () {
  var i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}
// if the date input field is not supported it loads a polyfill
if (!browserSupportsDateInput() && $('input[type=\'date\']').length > 0) {
  $.getScript('{{CDN}}/latest/lib/ext/nodep-date-input-polyfill/nodep-date-input-polyfill.dist.js', function () {
    console.log('date polyfill loaded');
  });
}
// 'qg-date-input' adds a jquery ui datepicker
if ($('input[class*=\'qg-date-input\']').length > 0) {
  $.getScript('{{CDN}}/latest/lib/ext/jquery-ui-bundle/jquery-ui.min.js', function () {
    $('head').append($("<link rel='stylesheet' href='{{CDN}}/latest/lib/ext/jquery-ui-bundle/jquery-ui.min.css' type='text/css' media='screen' />"));
  });
}
$(window).on('load', function() {
  // hasDatepicker class has to be removed from the input when the document is ready. jquery-ui.min.js will add the
  // calendar widget when the class does not exist on the input. Then hasDatepicker will be dynamically added to the input.
  // This needs to be done when the document is ready
  $('.qg-date-input').removeClass('hasDatepicker');
  $('.qg-date-input').datepicker();
});

