/* ========================================================================
* Set element to parent width
* ======================================================================== */

'use strict';

var parentWidth = (function ($) {
    var $target = $('*[data-parent-width=1]');
    $target.outerWidth($target.parent().width());
})(jQuery);

module.exports = parentWidth;
