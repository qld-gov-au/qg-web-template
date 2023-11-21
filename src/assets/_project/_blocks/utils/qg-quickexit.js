var handleQuickExit = function (e) {
  var $el = $('.qg-quick-exit');
  if (document.documentElement.clientWidth > 992) {
    if ($(this).scrollTop() > 200) {
      $el.css({ 'position': 'fixed', 'top': '0px' });
    }
    if ($(this).scrollTop() < 200) {
      $el.css({ 'position': 'sticky', 'top': '0px' });
    }
  } else {
    $el.css({ 'position': 'fixed', 'top': 'auto' });
  }
};
$(window).on('scroll', handleQuickExit);
window.addEventListener('resize', handleQuickExit, true);
