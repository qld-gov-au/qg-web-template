function browserSupportsDateInput () {
  var i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}
if (!browserSupportsDateInput() && $('input[type=\'date\']').length > 0) {
  $.getScript('{{CDN}}/latest/lib/ext/nodep-date-input-polyfill.dist.js', function () {
    console.log('date polyfill loaded');
  });
} else if ($('input[class=\'qg-date-input\']').length > 0) {
  $.getScript('{{CDN}}/latest/lib/ext/datepicker.js', function () {
    console.log('jquery datepicker loaded');
    $('head').append($("<link rel='stylesheet' href='{{CDN}}/latest/lib/ext/theme.css' type='text/css' media='screen' />")).append($("<link rel='stylesheet' href='{{CDN}}/latest/lib/ext/datepicker.css' type='text/css' media='screen' />"));
    $('.qg-date-input').datepicker({
      dateFormat: 'dd/mm/yy',
      changeYear: true,
      changeMonth: true,
    });
  });
}
