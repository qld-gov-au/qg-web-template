/***********************************
/////////////////
// QG Lightbox //
/////////////////

A wrapper for whatever lightbox technology is used. At the moment, Butterfly.

Dependancies: (Cannot be included because of errors)
import './../../lib/ext/butterfly/jquery.resize-events.js';
import './../../lib/ext/butterfly/jquery.history.js';
import './../../lib/ext/butterfly/jquery.butterfly.js';

TODO:
- Add function to load a lightbox with a string of formatted HTML from JS directly

***********************************/

jQuery.qgLightbox = {};

// Auto load
(function ($) {
  'use strict';

  $.fn.qgLightbox = function (inOpts = {}) {
    // Wrapper for whatever technology is used
    var outOpts = {};
    if (inOpts.callbackPreOpen !== undefined) {
      outOpts.callbackPreOpen = inOpts.callbackPreOpen;
    }
    // Initialise lightbox links for each match
    return this.each(() => {
      $(this).butterfly(outOpts);
    });
  };
  const init = function initQGLightbox () {
    // Default simple operation
    $('*[data-qg-lightbox=true]').not('[id]').attr('id', Math.random(100000, 999999).toString(36).substr(2));
    $('*[data-qg-lightbox=true]').butterfly();
  };
  init();
})(jQuery);
