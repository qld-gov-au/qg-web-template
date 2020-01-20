function browserSupportsDateInput () {
  var i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}
if (!browserSupportsDateInput()) {
  $.getScript('{{CDN}}/latest/lib/ext/nodep-date-input-polyfill.dist.js', function () {
    console.log('date polyfill loaded');
  });
}
