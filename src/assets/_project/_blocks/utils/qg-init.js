/**
 * This file contains general initialisation, element eventlisteners etc
 */

(function () {
  'use strict';

  $(document).ready(function () {
    /**
     * Event listener on header search box to make it accessible
     * If search box has no value, aria-busy of suggestion list should be true
     */
    $('#qg-search-query').on('focusout', function () {
      $(this).siblings('#suggestbox').attr('aria-busy', 'true');
    });
  });
}());
