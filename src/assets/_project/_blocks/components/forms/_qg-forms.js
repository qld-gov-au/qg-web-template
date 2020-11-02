(function ($) {
  'use strict';
  var $rcTheme = $('.rc-theme');
  var $fr = $('input[type="radio"]');
  var $fc = $('input[type="checkbox"]');

  function toggleFocus (e) {
    if (e.type === 'focus') {
      $(this).parents('li').addClass('rc-theme__focus');
    } else {
      $(this).parents('li').removeClass('rc-theme__focus');
    }
  }
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
}(jQuery));
