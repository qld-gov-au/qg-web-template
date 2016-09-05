var utils = (function () {
    function showHide() {
        var $button = $('.qg-toggle-btn');
        var $content = $('.qg-toggle-content');

        $button.each(function() {
            $(this).click(function (e) {
                e.preventDefault();
                var $content = $(this).parents('.row').last().next($content);
                if ($content.hasClass("qg-visually-hidden")) {
                    $content.slideUp(0, function() {
                        $content.removeClass('qg-visually-hidden').slideDown('fast');
                    });
                } else {
                    $content.slideUp('fast', function() {
                        $content.addClass('qg-visually-hidden').slideDown(0);
                    });
                }
            });
        });
    }

    return {
        showHide : showHide
    };
})();

export default utils;