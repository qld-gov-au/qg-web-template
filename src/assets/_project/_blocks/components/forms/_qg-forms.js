(function ($) {
  'use strict';
  $('input[type="radio"]').change(function () {
    if ($(this).is(':checked')) {
      $(this).parents('.rc-theme').find('li').removeClass('rc-theme__active');
      $(this).parents('li').addClass('rc-theme__active');
    } else {
      $(this).parents('li').removeClass('rc-theme__active');
    }
  });
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      $(this).parents('li').addClass('rc-theme__active');
    } else {
      $(this).parents('li').removeClass('rc-theme__active');
    }
  });

  $('input[type="checkbox"]').on('focus blur', toggleFocus);
  $('input[type="radio"]').on('focus blur', toggleFocus);

  function toggleFocus (e) {
    if (e.type === 'focus') {
      $(this).parents('li').addClass('rc-theme__focus');
    } else {
      $(this).parents('li').removeClass('rc-theme__focus');
    }
  }
}(jQuery));
