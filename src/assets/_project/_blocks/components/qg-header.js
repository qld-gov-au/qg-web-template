$(function () {
    'use strict';

    // Polyfill for position: sticky;
    var Stickyfill = require('stickyfill');
    var stickyfill = Stickyfill();
    stickyfill.add($('.sticky')[0]);

    // Mobile menu & Search events to prevent both of them opening at the same time
    $('.qg-show-menu, .qg-show-search').on('click', function () {
        if ($(this).attr('aria-expanded') === 'false') {
            $('body').addClass('header-active');
        } else {
            $('body').removeClass('header-active');
        }
        if ($(this).hasClass('qg-show-menu')) {
            $('.qg-search-form').collapse('hide');
        } else {
            $('.qg-navigation').collapse('hide');
        }
    });

    // Open/Close Search concierge
    $('.qg-search-form input[type=text]').on('focus', function () {
        $('.qg-search-form').addClass('active');
        $('.qg-search-concierge').show();
    });

    $('.qg-search-form .qg-search-close-concierge').on('click', function () {
        $('.qg-search-form').removeClass('active');
        $('.qg-search-concierge').hide();
    });
});