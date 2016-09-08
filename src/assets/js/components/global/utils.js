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

export default utils;