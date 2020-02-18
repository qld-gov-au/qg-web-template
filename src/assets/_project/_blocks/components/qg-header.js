$(function () {
    'use strict';

    // Polyfill for position: sticky;
    var Stickyfill = require('stickyfill');
    var stickyfill = Stickyfill();
    var elements = $('.sticky');
    stickyfill.add(elements);

    // Mobile menu & Search events to prevent both of them opening at the same time
    $('.qg-show-menu, .qg-show-search').on('click', function () {
        if ($(this).attr('aria-expanded') === 'false') {
            $('.qg-site-header').addClass('active');
        } else {
            $('.qg-site-header').removeClass('active');
        }
        if ($(this).hasClass('qg-show-menu')) {
            $('.qg-search-form').collapse('hide');
        } else {
            $('.qg-navigation').collapse('hide');
        }
    });

    // Keep location dropdown open the elements inside of the dropdown are clicked
    $('.header-location .dropdown-menu').click(function(e) {
        e.stopPropagation();
    });

    // Except for these button
    $('.header-location-close, .clear-location, .detect-location, .set-location').click(function(e) {
        $('.header-location').dropdown('toggle');
    });
});