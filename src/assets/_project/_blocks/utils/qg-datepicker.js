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

var handleDatePicker = function() {
  if ($("input[class*='qg-date-input']").length > 0) {
    // hasDatepicker class has to be removed from the input when the page is loaded. jquery-ui.min.js will add the
    // calendar widget when the class does not exist on the input. Then hasDatepicker will be dynamically added to the input.
    // This needs to be done when the page is loaded
    $('.qg-date-input').removeClass('hasDatepicker');
    $('.qg-date-input').datepicker({
      dateFormat: 'dd/mm/yy',
      changeYear: true,
      changeMonth: true,
    });
    $('.qg-date-input').attr('placeholder', 'dd/mm/yyyy');
  }
};
// 'qg-date-input' adds a jquery ui datepicker
if ($("input[class*='qg-date-input']").length > 0) {
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', function () {
    $('head').append($("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css' type='text/css' media='screen' />"));
  });
}

$(window).on('load', handleDatePicker);

