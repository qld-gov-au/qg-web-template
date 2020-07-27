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
  // $('.rc-theme').each(function () {
  //   // Cache the highest
  //   var onlyLabel = 0;
  //   var imageWithLabel = 0;
  //   // Select and loop the elements you want to equalise
  //   $('.rc-theme__label', this).each(function () {
  //     // If this box is higher than the cached highest then store it
  //     if ($(this).height() > onlyLabel) {
  //       onlyLabel = $(this).height();
  //     }
  //   });
  //   $('.rc-theme__with-image', this).each(function () {
  //     // If this box is higher than the cached highest then store it
  //     if ($(this).height() > imageWithLabel) {
  //       imageWithLabel = $(this).height();
  //     }
  //   });
  //   // Set the height of all those children to whichever was highest
  //   $('.rc-theme__label', this).height(onlyLabel);
  //   $('.rc-theme__with-image', this).height(imageWithLabel);
  // });
}(jQuery));
