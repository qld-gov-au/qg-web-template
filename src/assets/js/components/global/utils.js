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


const utils = (function () {
    // BREAKPOINTS //
    var breakpoints = {
        bsXs: 480,
        bsSm: 768,
        bsMd: 992,
        bsLg: 1200
    };

    // SHOW / HIDE TOGGLE DISPLAY //
    // This function interacts with CSS to define 'hidden'
    /*
    To initialise this on a page, add the attribute 'data-qg-showhide-target' to your trigger element (usually a button).
    Give this attribute a CSS selector for the element you wish to show / hide
    Options:
    - data-qg-parent    : Set a parent element if you wish to toggle other elements off
    - data-qg-show      : Force the element to allways be displayed at a certain size. Set to 'sm', 'md' or 'lg'
    - data-qg-aria-safe : Set true/false depending on if you want ARIA to be able to read the element when hidden (default: true)
    - data-qg-default   : Set to 'show' or 'hide' to set the default behaviour of the target element (default: hide)
    */
    /*
    var attrTarget      = 'data-qg-showhide-target',
        attrParent      = 'data-qg-parent',
        attrShow        = 'data-qg-show',
        attrAriaSafe    = 'data-qg-aria-safe',
        attrDefault     = 'data-qg-default',
        $trigger        = $('*[' + attrTarget + ']');

    jQuery.fn.select = function( target ){
        var $target;
        if( $( target ).length ) {
            $target = $( target );
        } else if( $( target, this ).length ){
            $target = $( target, this );
        }
        return $target;
    };

    var showHideAction = function( thisTrigger, state, duration ){

        state = ( state == undefined )? false: state; // To force the state of the action
        duration = ( duration == undefined )? 'fast': duration;

        var $thisTrigger = $(thisTrigger),
            $target = $thisTrigger.select( $thisTrigger.attr(attrTarget) ),
            $parent = false,
            show = 'auto', // Default value
            ariaSafe = true, // Default true
            ariaHiddenClass = 'qg-aria-hidden';

        if( typeof $thisTrigger.attr( attrParent ) !== undefined ) {
            $parent = $( $thisTrigger.attr( attrParent ) );
        }
        if( typeof $thisTrigger.attr( attrShow ) !== undefined ) {
            show = $thisTrigger.attr( attrShow );
        }
        if( typeof $thisTrigger.attr( attrAriaSafe ) !== undefined ) {
            ariaSafe = $thisTrigger.attr( attrAriaSafe );
        }
        switch( show ) {
            case "sm":
                ariaHiddenClass = 'qg-aria-hidden-show-sm';
                break;
            case "md":
                ariaHiddenClass = 'qg-aria-hidden-show-md';
                break;
            case "lg":
                ariaHiddenClass = 'qg-aria-hidden-show-lg';
                break;
        }

        if( state === false ){
            state = ( $thisTrigger.hasClass('active') )? 'hide': 'show';
        }

        if( state === 'show' ) {
            var tempClass = 'qg-temp-active-element';
            $thisTrigger.addClass( tempClass );
            if( $parent ){
                $parent.find('*['+attrTarget+']').each(function(){
                    if( ! $(this).hasClass( tempClass ) ){
                        showHideAction( this, 'hide' ); // hide all other elements
                    }
                });
            }
            $thisTrigger.removeClass( tempClass );

            $thisTrigger.addClass('active');
            if( ariaSafe ) {
                $target.slideUp(0,function(){
                    $target.removeClass(ariaHiddenClass)
                    .slideDown(duration);
                });
            } else {
                $target.slideDown(duration);
            }
        } else if( state === 'hide' ) {
            $thisTrigger.removeClass('active');
            if( ariaSafe ) {
                $target.slideUp(duration,function(){
                    $target.addClass(ariaHiddenClass)
                    .slideDown(0);
                });
            } else {
                $target.slideUp(duration);
            }
        } else {
            console.error('An impossible error occured in utils.js');
        }
    }
    var showHide = function () {

        $trigger.each( function(){
            var hide = 'hide';
            if( typeof $(this).attr( attrDefault ) !== undefined ) {
                hide = $(this).attr( attrDefault );
            }
            showHideAction( this, hide, 0 );

            if( $(this).is("input[type=radio]") ) {
                $(this).on('change', function(){
                    if( $(this).prop("checked", true) ){
                        showHideAction( this, 'show' );
                    }
                });
            } else {
                $(this).click(function(){
                    showHideAction( this );
                });
            }
        });
    };
    */

    return {
        // showHide : showHide,
        breakpoints: breakpoints
    };
})();

export default utils;