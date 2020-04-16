function browserSupportsDateInput () {
  var i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}
if (!browserSupportsDateInput() && $('input[type=\'date\']').length > 0) {
  $.getScript('{{CDN}}/latest/lib/ext/nodep-date-input-polyfill/nodep-date-input-polyfill.dist.js', function () {
    console.log('date polyfill loaded');
  });
}
if ($('input[class=\'qg-date-input\']').length > 0) {
  $.getScript('{{CDN}}/latest/lib/ext/jquery-ui-bundle/jquery-ui.min.js', function () {
    $('head').append($("<link rel='stylesheet' href='{{CDN}}/latest/lib/ext/jquery-ui-bundle/jquery-ui.min.css' type='text/css' media='screen' />"));
    $('.qg-date-input').datepicker({
      dateFormat: 'dd/mm/yy',
      changeYear: true,
      changeMonth: true,
    });
  });
}
