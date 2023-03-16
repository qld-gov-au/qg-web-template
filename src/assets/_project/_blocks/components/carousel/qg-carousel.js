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
    carousels.push(carousel);
    $(this).attr('data-state', 'cycle');
    
    $('#' + carousel).carousel({
      pause: false
    });

    $('#' + carousel + '').find('.toggleCarousel').on("click", function (e) {
      e.preventDefault();
      var $parentCarousel = $(this).parents('div.carousel.slide');
      let state = $parentCarousel.attr('data-state');
      if(state === 'cycle') {
        $parentCarousel.carousel('pause').attr('data-state', 'pause');
      } else if( state === 'pause' ) {
        $parentCarousel.carousel('cycle').carousel('next').attr('data-state', 'cycle');
      }
      $(this).find('span.fa, i.fa').toggleClass('fa-sync fa-pause');
    });
  });
  window.onload = function () {
    eqHeight(carousels);
  };
})(jQuery);

