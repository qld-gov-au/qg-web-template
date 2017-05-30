/*! Generate ID - v1.0.3 - 2014-09-18
* https://github.com/bboyle/Generate-ID
* Copyright (c) 2014 Ben Boyle; Licensed MIT */
(function ($) {
  'use strict';

	/**
	 * Assigns a unique value to `@id` unless hasAttribute( 'id' ) is true
	 *
	 * @param preferredId string to use for id value
	 *
	 * @return jquery object (chaining supported)
	 */
  $.fn.generateId = function (preferredId) {
    var i = 1;

    if (!preferredId) {
      preferredId = 'id';
    } else {
      preferredId = $.trim(preferredId.toLowerCase().replace(/[^a-z0-9_]+/g, ' ')).replace(/\s+/g, '-');
    }

    return this.each(function () {
      var id;

      if (!this.getAttribute('id')) {
        id = preferredId;
        while (document.getElementById(id)) {
          id = preferredId + String(i);
          i++;
        }
        this.setAttribute('id', id);
      }
    });
  };
}(jQuery));
