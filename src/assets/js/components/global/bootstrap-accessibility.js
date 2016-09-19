import '../../../../../node_modules/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js';

/*

* Extends bootstrap-accessibility.js to allow elements without href attribute to accept collapse extension

* Extended by QLD Gov, DSITI, OSSSIO, Digital Channels

*/

(function($) {
  "use strict";

  var uniqueId = function(prefix) {
      return (prefix || 'ui-id') + '-' + Math.floor((Math.random()*1000)+1)
  }

  // Collapse Extension
  // ===============================

  var $colltabs =  $('[data-toggle="collapse"]')
  $colltabs.attr({ 'role':'tab', 'aria-selected':'false', 'aria-expanded':'false' })
  $colltabs.each(function( index ) {
    var colltab = $(this)
    , collpanel = (colltab.attr('data-target')) ? $(colltab.attr('data-target')) : $(colltab.attr('href'))
    , parent  = colltab.attr('data-parent')
    , collparent = parent && $(parent)
    , collid = colltab.attr('id') || uniqueId('ui-collapse')

    $(collparent).find('div:not(.collapse,.panel-body), h4').attr('role','presentation')

      colltab.attr('id', collid)
      if(collparent){
        collparent.attr({ 'role' : 'tablist', 'aria-multiselectable' : 'true' })
        if(collpanel.hasClass('in')){
          if( colltab.attr('href') !== undefined ) { // Added by QLD DSITI OSSSIO
            colltab.attr({ 'aria-controls': colltab.attr('href').substr(1), 'aria-selected':'true', 'aria-expanded':'true', 'tabindex':'0' })
          } // Added by QLD DSITI OSSSIO
          collpanel.attr({ 'role':'tabpanel', 'tabindex':'0', 'aria-labelledby':collid, 'aria-hidden':'false' })
        }else{
          if( colltab.attr('href') !== undefined ) { // Added by QLD DSITI OSSSIO
            colltab.attr({'aria-controls' : colltab.attr('href').substr(1), 'tabindex':'-1' })
          } // Added by QLD DSITI OSSSIO
          collpanel.attr({ 'role':'tabpanel', 'tabindex':'-1', 'aria-labelledby':collid, 'aria-hidden':'true' })
        }
      }
  })

})(jQuery);

// Carousel Extension
// ===============================

var carouselKeydown = $.fn.carousel.Constructor.prototype.keydown;
$.fn.carousel.Constructor.prototype.keydown = function (e) {
  carouselKeydown.call(this); // Default behaviour

  if (k == 37 || k == 38) {                           //  Up
    $parent.carousel('prev')
    index--
    if(index < 0) {
      index = $items.length -1
      console.log('prevent previous');
    } else {
      $this.prev().focus()
    }

  }
  if (k == 39 || k == 40) {                          // Down
    $parent.carousel('next')
    index++
    if(index == $items.length) {
      index = 0
      console.log('prevent next');
    } else  {
      $this.one($.support.transition.end, function () {
        $this.next().focus()
      })
    }

  }

}
/*
(function($) {
  "use strict";

    // this[this.$element.hasClass('in') ? 'hide' : 'show']()
    var carouselToggle = $.fn.collapse.Constructor.prototype.toggle;
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
*/

/*
var carouselToggle = $.fn.carousel.Constructor.prototype.slide;
$.fn.carousel.Constructor.prototype.slide = function (type, next) {

  slideCarousel.call(this)

  var $active = this.$element.find('.item.active')
  , $next = next || $active[type]()

  slideCarousel.apply(this, arguments)

  $active
  .one($.support.transition.end, function () {
    $active.attr({'aria-selected':false, 'tabIndex': '-1'})
    $next.attr({'aria-selected':true, 'tabIndex': '0'})
  })

}
$(document).on('keydown.carousel.data-api', 'div[role=option]', $.fn.carousel.Constructor.prototype.keydown)

*/