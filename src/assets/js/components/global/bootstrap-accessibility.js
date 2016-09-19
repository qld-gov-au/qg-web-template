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
