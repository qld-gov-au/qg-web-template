(function ($) {
  'use strict';
  // qg radio buttons
  // $('.rc-theme li').click(function (event) {
  //   $(this).toggleClass('rc-theme__active');
  //   event.preventDefault();
  //   event.stopPropagation();
  // });
  $('input[type="radio"]').change(function () {
    if ($(this).is(':checked')) {
      $(this).parents('.rc-theme').find('li').removeClass('rc-theme__active');
      $(this).parents('li').addClass('rc-theme__active');
    } else {
      //$(this).prop('checked',true);
      $(this).parents('li').removeClass('rc-theme__active');
    }
  });
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      $(this).parents('li').addClass('rc-theme__active');
    } else {
      //$(this).prop('checked',true);
      $(this).parents('li').removeClass('rc-theme__active');
    }
  });
}(jQuery));
