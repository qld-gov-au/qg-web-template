(function ($) {
  'use strict';
  // qg radio buttons
  $('.rc-theme li').click(function (event) {
    $(this).find('input[type=radio]').prop('checked', true);
    $(this).parent('.choices').find('.active').removeClass('active');
    $(this).parent('ul').find('input[type=checkbox]').prop('checked', false);
    $(this).addClass('active').find('input[type=checkbox]').prop('checked', true);
  });
}(jQuery));
