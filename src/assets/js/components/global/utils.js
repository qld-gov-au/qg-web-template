const utils = (function () {
    // BREAKPOINTS //
    var breakpoints = {
        bsXs: 480,
        bsSm: 768,
        bsMd: 992,
        bsLg: 1200
    };
    // TOGGLE DISPLAY //
    var toggleTriggerAriaName = 'data-qg-toggletarget',
        toggleTriggerAriaSelector = '*['+toggleTriggerAriaName+']';
        toggleTriggerName = 'data-qg-toggletarget-hide',
        toggleTriggerSelector = '*['+toggleTriggerName+']';
    jQuery.fn.select = function( target ){
        var $target;
        if( $( target ).length ) {
            $target = $( target );
        } else if( $( target, this ).length ){
            $target = $( target, this );
        }
        return $target;
    };
    var hide = function( ariaFriendly ){

    }
    var show = function( ariaFriendly ){

    }
    var toggleDisplayAction = function( trigger, ariaFriendly ){
        var triggerName = (ariaFriendly)? toggleTriggerAriaName: toggleTriggerName,
            $target = $(this).select( $(this).attr(triggerName) );
        
        if( ! $target.hasClass('qg-hide') ) {
            $(this).removeClass('active');
            $target.slideUp('fast',function(){
                $target.addClass('qg-hide')
                .slideDown(0);
            });
        } else {
            $(this).addClass('active');
            $target.slideUp(0,function(){
                $target.removeClass('qg-hide')
                .slideDown('fast');
            });
        }
    }
    var toggleDisplay = function () {
        $(toggleTriggerAriaSelector).each( function( index ){
            var $target = $(this).select( $(this).attr(toggleTriggerName) );
            if( $target.attr('data-default') == 'shown' ){
                $(this).addClass('active');
            } else {
                $target.addClass('qg-hide');
            }
            $(this).attr('aria-label', 'Link not necessary screen readers');
        });
        $(toggleTriggerAriaSelector).click(function(){
            toggleDisplayAction( this, true );
        });
    };

    return {
        toggleDisplay : toggleDisplay,
        breakpoints: breakpoints
    };
})();


/*
const utils = (function () {
    var breakpoints = {
        bsXs: 480,
        bsSm: 768,
        bsMd: 992,
        bsLg: 1200
    };
    var showHide = function () {
        var $button = $('.qg-toggle-btn');
        var $content = $('.qg-toggle-content');

        $button.each(function() {
            $(this).click(function (e) {
                e.preventDefault();
                var $findContent = $(this).parents('.row').last().next($content);
                if ($findContent.hasClass('qg-visually-hidden')) {
                    $findContent.slideUp(0, function() {
                        $findContent.removeClass('qg-visually-hidden').slideDown('fast');
                    });
                } else {
                    $findContent.slideUp('fast', function() {
                        $findContent.addClass('qg-visually-hidden').slideDown(0);
                    });
                }
            });
        });
    };

    return {
        showHide : showHide,
        breakpoints: breakpoints
    };
})();
*/
export default utils;