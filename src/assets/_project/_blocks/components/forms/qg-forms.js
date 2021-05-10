(function ($) {
  'use strict';
  /**
   * This adds a pattern for radio button and checkbox , more info https://qld-gov-au.github.io/web-template-release/forms.html
   **/
  var $rcTheme = $('.rc-theme');
  function toggleFocus (e) {
    if (e.type === 'focus') {
      $(this).parents('li').addClass('rc-theme__focus');
    } else {
      $(this).parents('li').removeClass('rc-theme__focus');
    }
  }
  if ($rcTheme.length > 0) {
    var $fr = $('input[type="radio"]');
    var $fc = $('input[type="checkbox"]');

    $rcTheme.find($fr).change(function () {
      if ($(this).is(':checked')) {
        $(this).parents('.rc-theme').find('li').removeClass('rc-theme__active');
        $(this).parents('li').addClass('rc-theme__active');
      } else {
        $(this).parents('li').removeClass('rc-theme__active');
      }
    });
    $rcTheme.find($fc).change(function () {
      if ($(this).is(':checked')) {
        $(this).parents('li').addClass('rc-theme__active');
      } else {
        $(this).parents('li').removeClass('rc-theme__active');
      }
    });

    $rcTheme.find($fc).on('focus blur', toggleFocus);
    $rcTheme.find($fr).on('focus blur', toggleFocus);
  }
}(jQuery));
