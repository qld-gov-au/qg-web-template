/*aside carousel play and pause feature*/
'use strict';

(function ($) {
  let carousels = [];
  let eqHeight = (carousels) => {
    carousels.forEach(function (e) {
      let items = $('#' + e + '').find('.carousel-item');
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
    });
  };
  $('.qg-featured .carousel.slide').each(function (i, e) {
    let carousel = $(e).attr('id');

    //Disable hover behaviour #QOLDEV-67
    $('#' + carousel).carousel({
      pause: false,
    });

    carousels.push(carousel);

    //Defaults to cycle
    $(this).attr('data-state', 'cycle');

    $('#' + carousel)
      .find('.toggleCarousel')
      .on('click', function (e) {
        e.preventDefault();

        //Get carousel
        var $parentCarousel = $(this).parents('div.carousel.slide');

        //Switch carousel state between cycle/pause
        $parentCarousel.attr('data-state') === 'cycle'
          ? $parentCarousel.attr('data-state', 'pause')
          : $parentCarousel.attr('data-state', 'cycle');
        $parentCarousel.carousel($parentCarousel.attr('data-state'));

        $(this).find('span.fa, i.fa').toggleClass('fa-sync fa-pause');
      });
  });

  window.onload = function () {
    eqHeight(carousels);
  };
})(jQuery);
