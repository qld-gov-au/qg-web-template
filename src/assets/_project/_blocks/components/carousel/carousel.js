/*aside carousel play and pause feature*/
'use strict';

(function ($) {
  var paused = 0;
  $('.toggleCarousel').click(function (e) {
    e.preventDefault();
    var state = paused ? 'cycle' : 'pause';
    paused = paused ? 0 : 1;

    $('#aside-carousel').carousel(state);
    $(this)
      .find('i')
      .toggleClass('fa-sync fa-pause');
  });

  function carouselNormalization () {
    let items = $('#aside-carousel .item');
    let heights = [];
    let tallest;
    if (items.length) {
      var normalizeHeights = function () {
        items.each(function () {
          heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights);
        items.each(function () {
          $(this).css('min-height', tallest + 'px');
        });
      };
      normalizeHeights();

      $(window).on('resize orientationchange', function () {
        tallest = 0;
        heights.length = 0;
        items.each(function () {
          $(this).css('min-height', '0');
        });
        normalizeHeights();
      });
    }
  }
  carouselNormalization();
})(jQuery);

