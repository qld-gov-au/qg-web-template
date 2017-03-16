/* ========================================================================
* Bootstrap Javascript Extensions
* Extends bootstrap functionality where necissary to comply with QLD GOV requirements.
* ======================================================================== */

(function($) {
  "use strict";

    // this[this.$element.hasClass('in') ? 'hide' : 'show']()
    var collToggle = $.fn.collapse.Constructor.prototype.toggle;
    $.fn.collapse.Constructor.prototype.toggle = function(){
        if( this.$trigger.is("input[type=radio]") ) {
            if( this.$trigger.prop("checked", true) && ! this.$element.attr('aria-expanded') != true ) {
                this.show();
            }
        } else {
            collToggle.call(this); // Default behaviour
        }
    }
})(jQuery);
