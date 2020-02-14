$(function () {
    'use strict';

    // Exception for Mobile Menu as Bootstrap collapse doesn't work smoothly for this
    $('.qg-show-menu, .qg-show-search').on('click', function () {
        if ($(this).attr('aria-expanded') == "false") {
            $('#qg-nav-wrap').addClass('active');
        } else {
            $('#qg-nav-wrap').removeClass('active');
        }
        if ($(this).hasClass('qg-show-menu')) {
            $('#qg-search-form').collapse('hide');
        } else {
            $('.qg-navigation').collapse('hide');
        }
    });
});