/*aside carousel play and pause feature*/
'use strict';

(function ($) {
  const carousels = [];

  const eqHeight = (carousels) => {
    //For each carousel on the page...
    carousels.forEach(function (carousel) {
      //Get the height of each carousel slide in the carousel...
      const slides = $('#' + carousel).find('.carousel-item');

      //Each slides height into an array...
      const slideHeights = slides.map(function(e, slide) {
        return $(slide).height();
      });

      //Assign the tallest value to every slide
      slideHeights.map(function(e, slide) {
        $(slide).css('min-height', Math.max(...slideHeights) + 'px');
      });
    });
  };

  $('.qg-featured .carousel.slide').each(function (int, element) {
    const carouselID = $(element).attr('id');
    carousels.push(carouselID);

    //Start all slides to cycle by default
    $(this).attr('data-state', 'cycle');

    //Bind click/tap event
    $('#' + carouselID).find('.toggleCarousel').on('click', function (e) {
      e.preventDefault();
      const parentCarousel = $(this).parents('div.carousel.slide');
      const currentState = parentCarousel.attr('data-state');
      switch (currentState) {
      //If paused, switch to cycling state
      case 'pause':
        parentCarousel.attr('data-state', 'cycle').carousel('cycle');
        $(this).find('i, span').not('.button-title').removeClass('fa-sync fa-pause').addClass('fa-pause');
        break;

      case 'cycle':
        //If cycling, switch to a paused state
        parentCarousel.attr('data-state', 'pause').carousel('pause');
        $(this).find('i, span').not('.button-title').removeClass('fa-sync fa-pause').addClass('fa-sync');
        break;
      }
    });
  });

  //Equal height each carousel slide
  window.onload = function () {
    eqHeight(carousels);
  };
})(jQuery);
